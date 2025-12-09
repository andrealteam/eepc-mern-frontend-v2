import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getAwardPresentationDetails } from "../../services/eventApi";
import { awardConstantImg, fallBackImage } from "../../utils/constants";
import { getAlbumPhotoByID } from "../../services/photoApi";
import { baseFileURL } from "../../services/api";
import DOMPurify from "dompurify";

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

const AwardPresentationDetails = () => {
  const { slug } = useParams();
  console.log("slug check", slug);

  // Update queryFn to use getAwardDetail with the id
  const {
    data: awardPresentDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["awardPresentDetail", slug],
    queryFn: () => getAwardPresentationDetails(slug),
    gcTime: 180000,
  });
  console.log("data check", awardPresentDetail);

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  // Fallback to empty details if awardDetail is not available
  const {
    name,
    chief_guest,
    venue,
    date,
    time,
    guest_of_honour,
    album_id = "",
  } = awardPresentDetail || {};

  const {
    data: albumPhoto,
    isLoading: isLoadingPhoto,
    isError: isErrorPhoto,
    error: errorPhoto,
  } = useQuery({
    queryKey: ["albumPhoto", album_id],
    queryFn: () => getAlbumPhotoByID(album_id),
    gcTime: 180000,
  });

  if (isErrorPhoto) {
    return <p>Error: {errorPhoto.message || "Something went wrong!"}</p>;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <>
          <div>
            <h2 className="mb-4">{name}</h2>
            {/* {chief_guest ? (
              <p>
                {slug === "55th-eepc-india-national-awards-2022-23"
                  ? "Guest of Honour"
                  : "Chief Guest"}{" "}
                : {chief_guest}
              </p>
            ) : (
              ""
            )} */}
            {chief_guest && (
              <div className="d-flex gap-2">
                <p style={{ flexShrink: "0" }}>Chief Guest: </p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(chief_guest),
                  }}
                />
              </div>
            )}
            {guest_of_honour && (
              <div className="d-flex gap-2 mt-2">
                <p style={{ flexShrink: "0" }}>Guest of Honour: </p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(guest_of_honour),
                  }}
                />
              </div>
            )}

            <p className="mt-3">Date : {formatDate(date)}</p>
            <p>Venue : {venue}</p>
            <p>Time : {time}</p>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
              <Link
                to={
                  awardPresentDetail?.website_link
                    ? awardPresentDetail?.website_link
                    : `/award-winner/${slug}`
                }
              >
                <div className="card card-style">
                  <img
                    src={awardConstantImg}
                    alt={name}
                    className="card-img-top"
                    loading="lazy"
                  />
                  <a
                    className="card-body"
                    href={awardPresentDetail?.website_link}
                  >
                    <h5 className="card-title">Award Winners</h5>
                  </a>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              {isLoadingPhoto ? (
                <Skeleton height={200} />
              ) : albumPhoto.image ? (
                <Link to={`/gallery-view/${album_id}`}>
                  <div className="card card-style">
                    <img
                      src={baseFileURL + albumPhoto?.image}
                      alt={name}
                      className="card-img-top"
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Photo Gallery</h5>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AwardPresentationDetails;
