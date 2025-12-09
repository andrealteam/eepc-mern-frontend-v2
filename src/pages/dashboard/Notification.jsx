import React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  getBirthdayMessages,
  getProfile,
} from "../../services/dashboardEmployeeApi";
import { useQuery } from "@tanstack/react-query";
import { baseFileURL } from "../../services/api";
import Birthday_gift from "../../assets/images/icon/debasis_birthday_gift.gif";

const Notification = () => {
  const { user, loading, error } = useAuth();
  // console.log("user in noti", user);
  const emp_code = user?.emp_code;

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

  const { data: profileData, error: profileError } = useQuery({
    queryKey: ["employeeProfile", emp_code],
    queryFn: () => getProfile(emp_code),
    enabled: !!emp_code,
    gcTime: 180000,
  });
  console.log("brthd msgsss", BirthdayMsg, profileData);
  return (
    <>
      {profileData?.emp_date_of_birth?.slice(5) ===
      new Date().toISOString().slice(5, 10) ? (
        <>
          {" "}
          <div className="chat-container">
            <div className="chat-message">
              {/* Left side - Profile and content */}
              <div className="chat-left">
                {/* Profile picture */}
                <div className="profile-picture">
                  <img
                    src="https://eepc-exporter-home-page.vercel.app/src/assets/images/70_year_logo-r.png"
                    alt="EEPC"
                  />
                </div>

                {/* Name and status */}
                <div className="chat-content" style={{ marginTop: "14px" }}>
                  <h4 className="user-name" style={{ marginBottom: "-11px" }}>
                    EEPC INDIA
                  </h4>
                  <p className="typing-status">
                    Many Happy Returns of the Day. Happy Birthday from the
                    Entire EEPC Family!
                    <img src={Birthday_gift} style={{ width: "40px" }} />
                  </p>
                </div>
              </div>

              {/* Right side - Time and notification */}
              <div className="chat-right">
                <span className="timestamp">12:00</span>
              </div>
            </div>
          </div>
          {BirthdayMsg?.map((item) => {
            const time = item?.sended_at?.slice(11, 16);
            return (
              <div className="chat-container">
                <div className="chat-message">
                  {/* Left side - Profile and content */}
                  <div className="chat-left">
                    {/* Profile picture */}
                    <div className="profile-picture">
                      <img
                        src={baseFileURL + item?.wish_from_emp_image}
                        alt={item?.wish_from_emp}
                      />
                    </div>

                    {/* Name and status */}
                    <div className="chat-content">
                      <h4 className="user-name">{item?.wish_from_emp}</h4>
                      <p className="typing-status">{item?.message}</p>
                    </div>
                  </div>

                  {/* Right side - Time and notification */}
                  <div className="chat-right">
                    <span className="timestamp">{time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>No Notification</>
      )}
    </>
  );
};

export default Notification;
