import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { baseFileURL } from "../services/api";
import { getPhotoByID } from "../services/photoApi";

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

const PhotoGalleryDetails = () => {
  const { id } = useParams();

  const {
    data: photo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["photo", id],
    queryFn: () => getPhotoByID(id),
    gcTime: 180000,
  });

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <>
          <h2 className="mb-4">{photo.album_name}</h2>
          <p>Occasion: {photo.album_name}</p>
          <p>Date: {formatDate(photo.album_date)}</p>
          <p>Location: {photo.album_location}</p>

          <div className="row mt-4">
            {photo.images.map((image) => (
              <div className="col-lg-4">
                <div className="card card-style mt-4 photo-gallery">
                  <img
                    src={baseFileURL + image.image}
                    alt={image.image_title}
                    data-fancybox="gallery"
                    data-caption={image.image_title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title card-title-award">
                      {image.image_title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PhotoGalleryDetails;
