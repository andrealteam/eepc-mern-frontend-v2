import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import {
  getBirthdayMessages,
  getProfile,
} from "../../services/dashboardEmployeeApi";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getAllUsersForMsg } from "../../services/dashboardMemberApi ";
import useUsersForMessages from "../../hooks/useUsersForMessages";

const SidebarDashboard = ({ menuList }) => {
  const { user, loading, error } = useAuth();
  const member_id = user?.member_id;
  // console.log("user in noti", user);
  const emp_code = user?.emp_code;
  const [msgNotificationLength, setMsgNotificationLength] = useState(0);

  const {
    data: BirthdayMsg,
    isLoading,
    isError,
    error: BirthdayError,
  } = useQuery({
    queryKey: ["birthdayMsg", emp_code],
    queryFn: () => getBirthdayMessages(emp_code),
    enabled: !!emp_code,
  });

  const { data: Users } = useUsersForMessages(member_id);
  console.log("msg data check in", Users);

  const {
    data: profileData,
    isLoadingData,
    error: profileError,
  } = useQuery({
    queryKey: ["employeeProfile", emp_code],
    queryFn: () => getProfile(emp_code),
    enabled: !!emp_code,
    gcTime: 180000,
  });

  // useEffect(() => {
  //   if (Users?.data?.length) {
  //     localStorage.setItem("eepc-last-msg-users", Users?.data?.length);
  //   }
  // }, [Users]);

  // Calculate notification badge count
  useEffect(() => {
    const lastUsersLength =
      parseInt(localStorage.getItem("eepc-last-msg-users")) || 0;

    const diff = Users?.data?.length - lastUsersLength;
    if (diff > 0) {
      setMsgNotificationLength(diff);
    } else {
      setMsgNotificationLength(0);

      console.log("Chat closed - show notification", diff);
    }
  }, [Users]);

  console.log("setMsgNotificationLength data", msgNotificationLength);
  // if (isLoadingData) return <Skeleton height={500} />;

  // console.log("menulist check", menuList);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };
  if (isLoading || isLoadingData) return <Skeleton height={500} />;
  return (
    <aside className="sidebar">
      <div className="logout-btn">
        {/* Use button instead of Link for logout action */}
        <button onClick={handleLogout} className="nav-link" aria-label="Logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>&nbsp;Logout</span>
        </button>
      </div>
      <div className="page-group">
        {menuList?.map((menu, index) =>
          menu.path ? (
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                isActive ? "active-page" : "nav-link"
              }
              key={index}
              onClick={() => {
                if (menu.name === "My Messages") {
                  setMsgNotificationLength(0);
                  // localStorage.setItem(
                  //   "eepc-last-msg-users",
                  //   Users?.data?.length || 0
                  // );
                }
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                {menu.icon}
                {menu.name}

                {menu.name === "My Messages" && msgNotificationLength > 0 && (
                  <div className="notification-badge">
                    <span className="notification-count">
                      {msgNotificationLength}
                    </span>
                  </div>
                )}

                {menu.name === "Notification" &&
                  profileData?.emp_date_of_birth?.slice(5) ===
                    new Date().toISOString().slice(5, 10) && (
                    <div className="notification-badge">
                      <span className="notification-count">
                        {BirthdayMsg.length + 1}
                      </span>
                    </div>
                  )}
              </div>
            </NavLink>
          ) : (
            <a
              href={menu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="nav-link"
            >
              {menu.icon} &nbsp;&nbsp;
              {menu.name}
            </a>
          )
        )}
      </div>
    </aside>
  );
};

export default SidebarDashboard;
