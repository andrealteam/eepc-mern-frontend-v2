import React from "react";
import { useParams } from "react-router-dom";
import { getSpecificWebinarSeminar } from "../../services/eventApi";
import { useQuery } from "@tanstack/react-query";
import { baseFileURL } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faDollarSign,
  faHourglassHalf,
  faLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";

const WebinarSeminarPage = () => {
  const { url } = useParams();
  console.log("params check", url);
  const {
    data: webinarSeminarData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["specificWebinarSeminar", url],
    queryFn: () => getSpecificWebinarSeminar(url),
    enabled: !!url,
  });
  const WebinarData = webinarSeminarData?.[0];

  // Helper function to add ordinal suffix to the day
  const getOrdinalSuffix = (day) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const val = day % 100;
    return day + (suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0]);
  };

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return null; // Return null if date is invalid

    const date = new Date(dateString);

    // Check for invalid date
    if (isNaN(date)) return null;

    const day = getOrdinalSuffix(date.getDate());
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const sanitizedData = DOMPurify.sanitize(WebinarData?.details);

  // Check if the date is valid and should be rendered
  const formattedDate = formatDate(WebinarData?.from_date);
  const formattedToDate = WebinarData?.to_date
    ? formatDate(WebinarData?.to_date)
    : null;
  const formattedFromTime = WebinarData?.from_time
    ? WebinarData?.from_time
    : null;
  const formattedToTime = WebinarData?.to_time ? WebinarData?.to_time : null;

  console.log("seminar data", WebinarData);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="new-seminar-img"
        style={{ maxWidth: "none", background: "none" }}
      >
        <img
          style={{ height: "400px", width: "100%" }}
          src={baseFileURL + WebinarData?.image}
          className="img-fluid"
          alt={WebinarData?.title}
        />
      </div>
      <div className="new-seminar-text">
        <div className="new-seminar-content">
          <h3 className="mb-0">
            <a>{WebinarData?.title}</a>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />

          <div
            className="events-category-date-wraper d-flex align-items-center"
            style={{ marginTop: "15px" }}
          >
            <div className="events-meta-date-wrapper events-meta-line">
              <div className="events-meta-date">
                <span className="events-post-date">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  {formattedDate}
                  {formattedToDate && ` - ${formattedToDate}`}
                </span>
              </div>
            </div>
            <div className="events-meta-date-wrapper events-meta-line">
              <div className="events-meta-date">
                <span className="events-post-date">
                  <FontAwesomeIcon icon={faClock} />
                  {formattedFromTime}
                  {formattedToTime && ` - ${formattedToTime}`}
                </span>
              </div>
            </div>
          </div>
          <div>
            <p>
              <b>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ fontSize: "16px" }}
                />{" "}
                Venue:{" "}
              </b>
              {WebinarData?.venue_type === "physical"
                ? WebinarData?.physical_location
                : WebinarData?.venue_type === "hybrid"
                ? `${WebinarData?.physical_location} / Virtual`
                : "Virtual"}
            </p>
            <p>
              <b>
                <FontAwesomeIcon
                  icon={faHourglassHalf}
                  style={{ fontSize: "16px" }}
                />{" "}
                Registration Deadline:{" "}
              </b>
              {WebinarData?.registration_deadline}
            </p>
            <p>
              <b>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ fontSize: "16px" }}
                />{" "}
                Registration Fees:{" "}
              </b>
              {WebinarData?.webinar_type === "free" ? (
                "Free"
              ) : (
                <ul
                  style={{
                    marginTop: "5px",
                    gap: "5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <li>
                    Member : INR {WebinarData?.member_fees}/+- GST per person
                  </li>
                  <li>
                    Non member : INR {WebinarData?.non_member_fees}/+- GST per
                    person
                  </li>
                </ul>
              )}
            </p>
            <p>
              <b>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  style={{ fontSize: "16px" }}
                />{" "}
                Contact Persons:
              </b>
              <ul
                style={{
                  marginTop: "5px",
                  gap: "5px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                {WebinarData?.contact_person1 && (
                  <li>
                    {WebinarData?.contact_person1} —
                    {WebinarData?.contact_person1_email && (
                      <>
                        <a
                          href={`mailto:${WebinarData?.contact_person1_email}`}
                          style={{ color: "#1082d7" }}
                        >
                          {WebinarData?.contact_person1_email}
                        </a>
                        ,
                      </>
                    )}
                    <a
                      href={`tel:${WebinarData?.contact_person1_phone}`}
                      style={{ color: "#1082d7" }}
                    >
                      {" "}
                      {WebinarData?.contact_person1_phone}
                    </a>
                  </li>
                )}

                {WebinarData?.contact_person2 && (
                  <li>
                    {WebinarData?.contact_person2} —
                    {WebinarData?.contact_person2_email && (
                      <>
                        <a
                          href={`mailto:${WebinarData?.contact_person2_email}`}
                          style={{ color: "#1082d7" }}
                        >
                          {WebinarData?.contact_person2_email}
                        </a>
                        ,
                      </>
                    )}
                    <a
                      href={`tel:${WebinarData?.contact_person2_phone}`}
                      style={{ color: "#1082d7" }}
                    >
                      {" "}
                      {WebinarData?.contact_person2_phone}
                    </a>
                  </li>
                )}
              </ul>
            </p>
          </div>
          {WebinarData?.link && (
            <>
              <div style={{ display: "flex", gap: "10px", right: "0" }}>
                <a href={WebinarData?.link} target="_blank" className="btn-1">
                  Register here
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebinarSeminarPage;
