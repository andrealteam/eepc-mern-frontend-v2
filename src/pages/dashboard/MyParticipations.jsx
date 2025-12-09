import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import {
  getPhysicalEvents,
  getVirtualEvents,
} from "../../services/dashboardMemberApi ";
import "./profile.css";

// Helper function to add ordinal suffix to day
const getOrdinalSuffix = (day) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const val = day % 100;
  return day + (suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0]);
};

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = getOrdinalSuffix(date.getDate());
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const MyParticipations = () => {
  const { user, loading, error } = useAuth(); // Get user data from context

  if (error) return <div>Error: {error}</div>; // Show any authentication errors

  const member_id = user.member_id;

  // Fetch participation data using the emp_code from AuthContext
  const {
    data: myParticipationData,
    isParticipationLoading,
    isParticipationError,
    error: participationError,
  } = useQuery({
    queryKey: ["myParticipationData", member_id],
    queryFn: () => getPhysicalEvents(member_id),
    gcTime: 180000,
  });

  if (isParticipationError)
    return (
      <p>Error: {participationError.message || "Something went wrong!"}</p>
    );

  // Fetch profile data using the emp_code from AuthContext
  const {
    data: virtualEvents,
    isVirtualEventLoading,
    isVirtualEventError,
    error: VirtualEventError,
  } = useQuery({
    queryKey: ["virtualEvent", member_id],
    queryFn: () => getVirtualEvents(member_id),
    gcTime: 180000,
  });

  if (isParticipationError)
    return (
      <p>Error: {participationError.message || "Something went wrong!"}</p>
    );

  // Extract data from the profile response
  // const { result } = myParticipationData || {};
  // console.log(result);
  //   if (!result) return <p>{"Loading..."}</p>;
  return (
    <>
      <div className="row">
        <div className="col-lg-12" style={{ marginBottom: "20px" }}>
          <div className="section-title text-center">
            <h2 className="title">My Participations</h2>
          </div>
        </div>

        <div className="col-lg-12" style={{ marginBottom: "15px" }}>
          {isParticipationLoading ? (
            <Skeleton height={600} />
          ) : (
            <>
              <ul
                className="nav new-tabs nav-tabs mt-5 border-0"
                id="myTabs"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="tab1-tab"
                    data-bs-toggle="tab"
                    href="#tab1"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    Physical Events
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="tab2-tab"
                    data-bs-toggle="tab"
                    href="#tab2"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    Virtual Events
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabsContent">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                >
                  {!myParticipationData?.status ? (
                    <p>No Physical Events Participation Found!</p>
                  ) : (
                    myParticipationData.message?.map((item, index) => {
                      return (
                        <div key={index} className="new-tab-row">
                          <p>
                            Registartion Date :{" "}
                            {formatDate(item.RegistartionDate.split(" ")[0])}
                          </p>
                          <p>Exhibitor Id : {item.ExhibitorId}</p>
                          <p>Booth Size : {item.BoothSize}</p>
                          <p>Booth Selected : {item.BoothSelected}</p>
                          <p>Event Short Title : {item.EventShortTitle}</p>
                          <p>Event Start Date : {item.EventStartDate}</p>
                          <p>Event End Date : {item.EventEndDate}</p>
                          <p>Event City : {item.EventCity}</p>
                        </div>
                      );
                    })
                  )}
                </div>
                <div className="tab-pane fade show" id="tab2" role="tabpanel">
                  {!virtualEvents?.status ? (
                    <p>No Virtual Events Participation Found!</p>
                  ) : (
                    virtualEvents.message?.map((item) => {
                      return (
                        <div>
                          <p>
                            Registartion Date :{" "}
                            {formatDate(item.RegistartionDate.split(" ")[0])}
                          </p>
                          <p>Exhibitor Id : {item.ExhibitorId}</p>
                          <p>Booth Size : {item.BoothSize}</p>
                          <p>Booth Selected : {item.BoothSelected}</p>
                          <p>Event Short Title : {item.EventShortTitle}</p>
                          <p>Event Start Date : {item.EventStartDate}</p>
                          <p>Event End Date : {item.EventEndDate}</p>
                          <p>Event City : {item.EventCity}</p>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyParticipations;
