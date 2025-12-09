import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingEvents, getUpcomingWebinar } from "../../services/homeApi";
import { baseFileURL } from "../../services/api";

const Upcoming = () => {
  // Fetch Events
  const {
    data: events,
    isLoading: isEventsLoading,
    isError: isEventsError,
    error: eventError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getUpcomingEvents,
  });

  // Fetch Webinars
  const {
    data: webinars,
    isLoading: isWebinarsLoading,
    isError: isWebinarsError,
    error: eventWebinars,
  } = useQuery({
    queryKey: ["webinars"],
    queryFn: getUpcomingWebinar,
  });

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

  // Loading and error handling
  if (isEventsLoading || isWebinarsLoading) {
    return <section className="banner position-relative">Loading...</section>;
  }

  if (isEventsError)
    return <p>Error: {eventError.message || "Something went wrong!"}</p>;
  if (isWebinarsError)
    return <p>Error: {eventWebinars.message || "Something went wrong!"}</p>;

  return (
    <section className="">
      <div className="event-seminar-wrap">
        {/* Forthcoming Events Section */}
        <div className="event-wrap">
          <h3 className="sub-heading">Forthcoming</h3>
          <h2 className="main-heading">Events</h2>
          <div className="event-list">
            {/* Displaying events dynamically */}
            {events?.map((event) => {
              const {
                id,
                trade_fairs_events,
                link,
                date,
                to_date,
                place,
                circular,
              } = event;
              return (
                <div className="event-item" key={id}>
                  <div className="event-text">
                    <h3>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {trade_fairs_events}
                      </a>
                    </h3>
                    <h5>
                      {formatDate(date)}
                      {date !== to_date && ` - ${formatDate(to_date)}`}
                    </h5>
                    <p>{place || " "}</p>
                  </div>
                  <div className="event-button">
                    {
                      // Check if both `link` and `circular` are empty or null
                      (circular === "" || circular === null) &&
                      (link === "" || link === null) ? null : link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-1 btn-2"
                        >
                          Know More
                        </a>
                      ) : (
                        <a
                          href={baseFileURL + circular}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-1 btn-2"
                        >
                          Know More
                        </a>
                      )
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Seminars Section */}
        <div className="event-wrap seminar-wrap">
          <h3 className="sub-heading">Upcoming</h3>
          <h2 className="main-heading">Seminars / Webinars</h2>
          <div className="event-list">
            {/* Displaying webinars dynamically */}
            {webinars.length === 0 ? (
              <p className="text-secondary border py-4 px-3">
                No upcoming events
              </p>
            ) : (
              webinars?.map((webinar) => {
                const { id, title, link, from_date, to_date, place } = webinar;
                return (
                  <div className="event-item" key={id}>
                    <div className="event-text">
                      <h3>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {title}
                        </a>
                      </h3>
                      <h5>
                        {formatDate(from_date)}
                        {from_date !== to_date && ` - ${formatDate(to_date)}`}
                      </h5>

                      <p>{place || " "}</p>
                    </div>
                    <div className="event-button">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-1"
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
