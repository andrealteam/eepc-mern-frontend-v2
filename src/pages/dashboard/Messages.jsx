import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import {
  getAllUsersForMsg,
  getMessages,
  postMessages,
} from "../../services/dashboardMemberApi ";
import { useAuth } from "../../context/AuthContext";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUsersForMessages from "../../hooks/useUsersForMessages";

const Messages = () => {
  const { user, loading, error } = useAuth();
  console.log("user fulll", user);
  if (error) return <div>Error: {error}</div>; // Show any authentication errors
  const [selectedUser, setSelectedUser] = useState(null);
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [website_url, setWebsiteUrl] = useState("");
  const [msgNotificationLength, setMsgNotificationLength] = useState(0);
  const [baseLength, setBaseLength] = useState(
    parseInt(localStorage.getItem("eepc-last-msg-users")) || 0
  );
  const [filterNotificationData, setFilterNotificationData] = useState([]);
  const [notificationDataInCount, setNotificationDataInCount] = useState({});
  const [processedUserIds, setProcessedUserIds] = useState(new Set());
  const member_id = user?.member_id;
  console.log("mmid", member_id);

  // "3106"

  const messagesEndRef = useRef(null);
  console.log("path check", window.location.pathname);
  const {
    data: Users,
    isLoading,
    isError,
  } = useUsersForMessages(
    member_id,
    window.location.pathname === "/dashboard/messages" // only poll when on messages page
  );

  console.log("userss msggg", Users);

  const {
    data: msgs,
    isLoading: isMsgsLoading,
    isError: isMsgsError,
    error: headerError,
    refetch,
    isSuccess,
  } = useQuery({
    queryKey: ["msgs-get", email, website_url, selectedUser],
    queryFn: () => getMessages(email, website_url),
    enabled: !!selectedUser, // ✅ Only fetch when isOpen is true
    refetchInterval: 15000, // ✅ Poll only when chat is open
  });

  useEffect(() => {
    if (!Users?.data) return;

    const currentLength = Users.data.length;

    // Naye users aaye to notification barhao
    if (currentLength > baseLength) {
      setMsgNotificationLength(currentLength - baseLength);
    }
  }, [Users, baseLength]);

  // ✅ Jab component unmount hoga tabhi baseLength update karo
  useEffect(() => {
    return () => {
      if (Users?.data?.length) {
        localStorage.setItem("eepc-last-msg-users", Users.data.length);
      }
    };
  }, [Users]);

  useEffect(() => {
    if (!Users?.data || msgNotificationLength <= 0) return;

    // ✅ Sirf naye users nikalo
    const newUsers = Users.data.slice(-msgNotificationLength);

    setNotificationDataInCount((prev) => {
      const updated = { ...prev };

      newUsers.forEach((user) => {
        if (user?.email && user?.id) {
          // ✅ Check karo agar yeh user already process ho chuka hai
          if (!processedUserIds.has(user.id)) {
            updated[user.email] = (updated[user.email] || 0) + 1;
          }
        }
      });

      return updated;
    });

    // ✅ Naye users ko filter data mein add karo
    setFilterNotificationData((prev) => {
      const newUsersToAdd = newUsers.filter(
        (user) => user?.id && !processedUserIds.has(user.id)
      );
      return [...newUsersToAdd, ...prev];
    });

    // ✅ Process kiye hue users ke IDs ko track karo
    const newUserIds = newUsers.map((user) => user.id).filter(Boolean);
    setProcessedUserIds((prev) => new Set([...prev, ...newUserIds]));
  }, [msgNotificationLength]);

  console.log(
    "last msg length and filter data",
    msgNotificationLength,
    filterNotificationData,
    notificationDataInCount,
    selectedUser
  );

  // console.log("last msg length", msgNotificationLength);

  const safeMsgs = Array.isArray(msgs) ? msgs : [];
  useEffect(() => {
    if (isSuccess && Array.isArray(msgs)) {
      setMessages([...safeMsgs]);
    }
  }, [msgs, isSuccess]);

  // Set selectedUser once data is loaded
  // 1. Default select first user
  useEffect(() => {
    if (Users?.member_latest_message?.length && !selectedUser) {
      setSelectedUser(Users.member_latest_message[0]);
    }
  }, [Users, selectedUser]);

  // 2. Sync selectedUser to latest object from Users
  useEffect(() => {
    if (!selectedUser) return;

    // Remove notification if exists
    if (notificationDataInCount[selectedUser.email]) {
      setNotificationDataInCount((prev) => {
        const updated = { ...prev };
        delete updated[selectedUser.email];
        return updated;
      });

      setFilterNotificationData((prev) =>
        prev.filter((u) => u.email !== selectedUser.email)
      );
    }
  }, [selectedUser, notificationDataInCount]);

  console.log("notificationDataInCount", notificationDataInCount);

  useEffect(() => {
    if (selectedUser) {
      setEmail(selectedUser.email);
      setWebsiteUrl(selectedUser.exporter_slug);
      refetch(); // Fetch messages for the selected user
    }
  }, [selectedUser, refetch]);

  const scrollToBottom = () => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
      chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    // Show instantly in UI
    setMessages((prev) => [
      ...prev,
      { from_user: "member", message: trimmed, created_at: Date.now() },
    ]);
    setMessage(""); // Clear input

    try {
      const res = await postMessages(
        { name: "member", email, message: trimmed, from_user: "member" },
        website_url
      );

      if (res.status) {
        console.log("Message sent successfully");
        refetch(); // 🔁 refresh from backend
      }
    } catch (error) {
      console.error("Send error:", error);
      setMessages((prev) => [
        ...prev,
        {
          from_user: "member",
          message: "Error sending message. Please try again.",
        },
      ]);
    }
  };

  console.log("msgs ajaaaa", messages);

  if (isMsgsLoading) return <div>Loading chat...</div>;
  if (isMsgsError) return <div>Error loading chat: {profileError.message}</div>;

  if (isLoading) return null;
  if (isError) {
    console.error("Header fetch error:", headerError);
    return null;
  }

  // If data is not available (null/undefined), don't render
  // if (!Users) return null;
  return (
    <div className="chat-app">
      {/* LEFT SIDEBAR */}
      <div className="chat-sidebar">
        <div className="sidebar-header">Messages</div>
        <div className="user-list">
          {Users?.member_latest_message?.map((user) => (
            <div
              key={user.id}
              className={`user-item ${
                selectedUser?.id === user.id ? "active" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="user-name">{user.name}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    maxWidth: "200px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "14px",
                  }}
                >
                  {user.message}
                </div>

                {notificationDataInCount[user.email] && (
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#bf1022",
                      color: "white",
                      fontSize: "13px",
                      padding: "1px 7px",
                      borderRadius: "9999px",
                      flexShrink: 0,
                    }}
                  >
                    {notificationDataInCount[user.email]}
                  </span>
                )}
              </div>

              <div className="user-time">
                {new Date(user.updated_at).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "short",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT PANEL */}
      <div className="chat-panel">
        {console.log("selectedUser in right side", selectedUser)}
        {selectedUser ? (
          <>
            {/* HEADER */}
            <div className="chat-header">
              <div className="chat-user-name">{selectedUser.name}</div>
              <div className="chat-subtext">{selectedUser.email}</div>
              {selectedUser?.phone && (
                <div className="chat-subtext">{selectedUser.phone}</div>
              )}
            </div>

            {/* CHAT BODY */}
            <div className="chat-body">
              {Array.isArray(messages) &&
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`chat-bubble ${
                      msg.from_user === "member" ? "sent" : "received"
                    }`}
                  >
                    <div>{msg?.message}</div>
                    <div className="msg-time">
                      {new Date(msg?.created_at).toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>

            {/* FOOTER */}
            <div className="chat-footer">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message and hit 'Enter'"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                className="input chat-input"
              />
              <button className="send-btn" onClick={handleSend}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </>
        ) : (
          <div className="chat-placeholder">
            No messages yet — break the ice and send the first one!
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
