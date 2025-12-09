import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { myMembershipData } from "../../services/dashboardMemberApi ";
import "./profile.css";

const MyMembership = () => {
  const { user, loading, error } = useAuth(); // Get user data from context

  if (error) return <div>Error: {error}</div>; // Show any authentication errors

  const member_id = user.member_id;

  // Fetch profile data using the emp_code from AuthContext
  const {
    data: memberShipData,
    isLoading,
    isError,
    error: profileError,
  } = useQuery({
    queryKey: ["memberShipData", member_id],
    queryFn: () => myMembershipData(member_id),
    gcTime: 180000,
  });

  if (isError)
    return <p>Error: {profileError.message || "Something went wrong!"}</p>;

  // Extract data from the profile response
  const { result } = memberShipData || {};
  // console.log(result);
  if (!result)
    return (
      <>
        <div className="col-lg-12" style={{ marginTop: "2px" }}>
          <Skeleton height={200} count={1} />
        </div>
      </>
    );
  return (
    <>
      <div className="row">
        <div className="col-lg-12" style={{ marginBottom: "15px" }}>
          <div className="section-title text-center">
            <h2 className="title">My Membership</h2>
          </div>
        </div>

        <div className="col-lg-12" style={{ marginBottom: "15px" }}>
          {isLoading ? (
            <Skeleton height={200} />
          ) : (
            <>
              <div className="row profile-details">
                <div className="navigation-wrapper membership-details">
                  <ul
                    className="nav "
                    id="myTab"
                    role="tablist"
                    style={{
                      justifyContent: "left",
                      marginBottom: "20px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <li className="nav-item ">
                      <a
                        className="nav-style active "
                        id="present_member-tab"
                        data-bs-toggle="tab"
                        href="#present_member"
                        role="tab"
                        aria-controls="present_member"
                        aria-selected="false"
                      >
                        Present Member
                      </a>
                    </li>
                  </ul>
                </div>

                <h3>
                  <b>
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
                      className="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    &nbsp;&nbsp;Membership Date :
                  </b>{" "}
                  {result.memInfoData.RCMC_Start_Date || ""}
                </h3>
                <h3>
                  <b>
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
                      className="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    &nbsp;&nbsp;Valid Upto :
                  </b>{" "}
                  {result.memInfoData.RCMC_End_Date || ""}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyMembership;
