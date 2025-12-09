import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { myMembershipData } from "../../services/dashboardMemberApi ";
import "./profile.css";

const MyCertificateOfOrigin = () => {
  const { user, loading, error } = useAuth();

  if (error) return <div>Error: {error}</div>;

  const member_id = user.member_id;

  // Fetch profile data using the emp_code from AuthContext
  const {
    data: myParticipationData,
    isLoading,
    isError,
    error: profileError,
  } = useQuery({
    queryKey: ["myParticipationData", member_id],
    queryFn: () => myMembershipData(member_id),
    gcTime: 180000,
  });

  if (isError)
    return <p>Error: {profileError.message || "Something went wrong!"}</p>;

  // Extract data from the profile response
  const { result } = myParticipationData || {};
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
        {/* <div className="col-lg-12" style={{ marginBottom: "20px" }}>
          <div className="section-title text-center">
            <h2 className="title">My Certificate of Origin</h2>
          </div>
        </div> */}

        <div className="col-lg-12">
          {isLoading ? (
            <Skeleton height={200} />
          ) : (
            <>
              <div className="row">
                <div className="news-details">
                  <p>
                    As per Trade Notice No. 24/2024-25, dated December 20, 2024,
                    all Certificates of Origin (CoO) [Preferential and
                    Non-preferential] must be filed electronically through the
                    eCoO 2.0 platform at{" "}
                    <a href="https://www.trade.gov.in" target="_blank">
                      https://www.trade.gov.in
                    </a>
                    .
                  </p>
                  {/* <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="col-lg-12 col-xl-12 col-md-12 col-12 aos-init aos-animate"
                  >
                    <a
                      className="rn-btn text-center"
                      target="_blank"
                      href="https://coo.eepcindia.com/coo/apply_now"
                    >
                      <span>Apply for COO</span>
                    </a>
                  </div> */}
                </div>
              </div>
              {/* <div className="rn-testimonial-area pb-5" id="features">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <p
                        style={{
                          width: "100%",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        No Certificate of Origin Found !
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCertificateOfOrigin;
