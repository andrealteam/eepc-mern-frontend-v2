import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { myMembershipData } from "../../services/dashboardMemberApi ";
import "./profile.css";

const ChangePassword = () => {
  const { user, loading, error } = useAuth();
  if (loading) return <div>Loading...</div>; // Show loading state while checking auth
  if (error) return <div>Error: {error}</div>; // Show any authentication errors

  const member_id = user.member_id;

  // Fetch profile data using the emp_code from AuthContext
  // const {
  //     data: myParticipationData,
  //     isLoading,
  //     isError,
  //     error: profileError,
  // } = useQuery({
  //     queryKey: ["myParticipationData", member_id],
  //     queryFn: () => myMembershipData(member_id),
  //     gcTime: 180000,
  // });

  //if (isError) return <p>Error: {profileError.message || "Something went wrong!"}</p>;

  // Extract data from the profile response
  // const {
  //     result
  // } = myParticipationData || {};
  //if (!result) return <p>{"Loading..."}</p>;
  return (
    <>
      <div className="row">
        <div className="col-lg-12" style={{ marginBottom: "20px" }}>
          <div className="section-title text-center">
            <h2 className="title">Change Password</h2>
          </div>
        </div>

        <div className="col-lg-12" style={{ marginBottom: "15px" }}>
          <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div
              data-aos-delay="600"
              className="col-lg-8 mx-auto contact-input"
            >
              <div className="contact-form-wrapper">
                <form
                  method="POST"
                  action="https://www.eepcindia.org/backend/user/member_change_password_post"
                  className="rnt-contact-form row"
                >
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Member Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        name="member_email_id"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12" style={{ marginTop: "10px" }}>
                    <button name="submit" type="submit" className="rn-btn">
                      <span>SUBMIT</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-arrow-right"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
