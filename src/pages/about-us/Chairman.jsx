import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { baseFileURL } from "../../services/api";
import { getChairmanPen } from "../../services/aboutApi";
import Skeleton from "react-loading-skeleton";

const Chairman = () => {
  const {
    data: chairmanData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["chairmanData"],
    queryFn: getChairmanPen,
    gcTime: 180000,
  });

  // Extract data from the response
  const { chairman_name, chairman_pen, chairman_signature, chairman_image } =
    chairmanData?.data || {};

  const sanitizedMessage = DOMPurify.sanitize(chairman_pen);

  return (
    <>
      {isError && <p>Error: {error.message || "Something went wrong!"}</p>}
      {isLoading ? (
        <Skeleton height={500} />
      ) : (
        <section className="pb-70">
          <div className="container">
            <div className="row">
              {/* Profile Section */}
              <div className="col-lg-4">
                <div className="profile-card">
                  <div className="profile-img">
                    <img
                      src={baseFileURL + chairman_image || "default-image.jpg"} // Fallback to a default image
                      alt={chairman_name || "Chairman Name"}
                      className="w-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="profile-text text-center">
                    <h3>{chairman_name || "Chairman Name"}</h3>
                    <p>Chairman</p>
                  </div>
                </div>
              </div>

              {/* Chairman's Message Section */}
              <div className="col-lg-8">
                <div className="chairman-message">
                  <div
                    className="message-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
                  />
                  <hr />
                  <div className="signature-box">
                    <div>
                      <img
                        src={
                          baseFileURL + chairman_signature ||
                          "default-signature.jpg"
                        } // Fallback to a default signature
                        alt="Chairman Signature"
                        loading="lazy"
                      />
                      <h3>{chairman_name || "Chairman's Name"}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Chairman;
