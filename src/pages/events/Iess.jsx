import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import "../Table.css";
import { getIess, getIessPrev} from "../../services/eventApi";

const Iess = () => {
  const {
    data: iessPrev,
    isLoading: isLoadingIessPrev,
    isError: isErrorIessPrev,
    error: iessPrevError,
  } = useQuery({
    queryKey: ["iessPrev"],
    queryFn: getIessPrev,
    gcTime: 180000,
  });

  const {
    data: iess,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["iess"],
    queryFn: getIess,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(iess?.iess || "");
  }, [iess?.iess]);

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong!"}</p>;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: sanitizedMessage }} />
      )}
      {/* FAQ will come */}
      <div className="accordion faq-accordion" id="accordionExample">
        {isLoadingIessPrev ? (
          <Skeleton height={100} count={6} />
        ) : (
          iessPrev?.map((item, index) => {
            const {
              id,
              event,
              from_date,
              to_date,
              venue,
              post_show_report,
            } = item;

            return (
              <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id={`heading${id}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${id}`}
                  >
                    {event}
                  </button>
                </h2>
                <div
                  id={`collapse${id}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Event</th>
                          <td>{event}</td>
                        </tr>
                        <tr>
                          <th>Dates</th>
                          <td>
                            {new Date(from_date).toLocaleDateString()} -{" "}
                            {new Date(to_date).toLocaleDateString()}
                          </td>
                        </tr>
                        <tr>
                          <th>Venue</th>
                          <td>{venue}</td>
                        </tr>
                        <tr>
                          <th>Post Show Report</th>
                          <td>
                            {post_show_report ? (
                              <a
                                href={post_show_report}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Brief Reports
                              </a>
                            ) : (
                              "N/A"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Iess;
