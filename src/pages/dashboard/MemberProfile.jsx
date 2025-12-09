import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "./profile.css";
import { getProfile } from "../../services/dashboardMemberApi ";

const MemberProfile = () => {
  const { user, loading, error } = useAuth();

  const member_id = user?.member_id;

  // Show loading state during authentication
  if (loading) {
    return (
      <div className="col-lg-12" style={{ marginTop: "2px" }}>
        <Skeleton height={200} />
        <div className="row" style={{ display: "flex", marginTop: "2px" }}>
          <div className="col-lg-6" style={{ paddingRight: "2px" }}>
            <Skeleton height={300} width={500} />
          </div>
          <div className="col-lg-6" style={{ paddingLeft: "5px" }}>
            <Skeleton height={300} width={450} />
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  // const member_id = user.member_id;

  const {
    data: profileData,
    isLoading,
    isError,
    error: profileError,
  } = useQuery({
    queryKey: ["profileData", member_id],
    queryFn: () => getProfile(member_id),
    gcTime: 180000,
    enabled: !!member_id,
  });

  if (isError)
    return <div>Error: {profileError?.message || "Something went wrong!"}</div>;

  const { result } = profileData || {};

  if (!result) {
    return (
      <>
        <div className="col-lg-12" style={{ marginTop: "2px" }}>
          <Skeleton height={200} />
        </div>
        <div className="row" style={{ display: "flex", marginTop: "2px" }}>
          <div className="col-lg-6" style={{ paddingRight: "2px" }}>
            <Skeleton height={300} width={500} />
          </div>
          <div className="col-lg-6" style={{ paddingLeft: "5px" }}>
            <Skeleton height={300} width={450} />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-12" style={{ marginBottom: "15px" }}>
        {isLoading ? (
          <Skeleton height={200} />
        ) : (
          <div className="row profile-details">
            <h3 style={{ color: "#1a83c6" }}>
              {result.Full_Name_Of_Company || ""}
            </h3>
            <p>
              <b>IEC No. :</b> {result.I_E_Code || ""}
            </p>
            <p>
              <b>Member Code :</b> {result.Member_Code || ""}
            </p>
          </div>
        )}
      </div>

      <div className="row" style={{ display: "flex" }}>
        <div
          className="col-lg-6"
          style={{
            paddingRight: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="row profile-details" style={{ flex: 1 }}>
            <h3 style={{ color: "#1a83c6" }}>Correspondence Address</h3>
            <p>
              {[
                result.Correspondence.Address,
                result.Correspondence.Address2,
                result.Correspondence.Address3,
                result.Correspondence.Address4,
              ]
                .filter(Boolean)
                .join(" ")}
            </p>
            <p>City : {result.Correspondence.City || ""}</p>
            <p>State : {result.Correspondence.State || ""}</p>
            <p>Post Code : {result.Correspondence.Post_Code || ""}</p>
            <p>Phone No : {result.Correspondence.Phone_No || ""}</p>
            <p>Email : {result.Correspondence.E_Mail || ""}</p>
          </div>
        </div>

        <div
          className="col-lg-6"
          style={{
            paddingLeft: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="row profile-details" style={{ flex: 1 }}>
            <h3 style={{ color: "#1a83c6" }}>
              Your Nearest Regional Office of EEPC INDIA
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: result.RegionalOffice?.Address || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
