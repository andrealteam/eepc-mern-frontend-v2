import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import {
  getConferenceHall,
  getConferenceHallImages,
} from "../../services/resourcesApi";
import Skeleton from "react-loading-skeleton";
import { baseFileURL } from "../../services/api";

const EepcConferenceHall = () => {
  const {
    data: conferenceDetails,
    isLoading: isConferenceLoading,
    isError: isConferenceError,
    error: conferenceError,
  } = useQuery({
    queryKey: ["conferenceDetails"],
    queryFn: getConferenceHall,
    gcTime: 180000,
  });

  const {
    data: conferenceImages,
    isLoading: isConferenceImgLoading,
    isError: isConferenceImgError,
    error: conferenceImgError,
  } = useQuery({
    queryKey: ["conferenceImages"],
    queryFn: getConferenceHallImages,
    gcTime: 180000,
  });

  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(conferenceDetails?.eepc_india_conference_hall);
  }, [conferenceDetails?.eepc_india_conference_hall]);

  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          {isConferenceError && <div>Error: {conferenceError.message}</div>}
          {isConferenceLoading ? (
            <Skeleton count={5} height={100} /> // Skeleton loader for paragraphs or content
          ) : (
            <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
          )}
        </div>
        <div className="col-lg-4">
          <div className="map">
            {isConferenceLoading ? (
              <Skeleton height={200} />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7950064382094!2d88.35199497529982!3d22.54935057950822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771af3e4638d%3A0x9c7d6f99e232bb87!2sVanijya%20Bhawan%2C%20ITFC%2C%201%2F1%2C%20Wood%20St%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1734960707379!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <div className="row pt-70 justify-content-center">
        {isConferenceImgError ? (
          <div>Error: {conferenceImgError.message}</div>
        ) : (
          conferenceImages?.map((item, key) => {
            return (
              <div className="col-lg-4" key={key}>
                {isConferenceImgLoading ? (
                  <Skeleton height={300} width="100%" />
                ) : (
                  <div className="conference-img">
                    <img
                      src={baseFileURL + item.image}
                      alt={item.title}
                      data-fancybox="gallery"
                      data-caption={item.title}
                      className="card-img-top"
                    />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default EepcConferenceHall;
