import React from "react";
import { photoGalleryData } from "../../utils/constants"; // Import photo gallery data from constants.js
import { Link } from "react-router-dom";
import { getPhotoHome } from "../../services/photoApi";
import { useQuery } from "@tanstack/react-query";
import { baseFileURL } from "../../services/api";

// PhotoGallery Component
const PhotoGallery = () => {
  const {
    data: photoHome,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["photoHome"],
    queryFn: getPhotoHome,
    gcTime: 180000,
  });

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>; // You can add a loading state if necessary
  }

  // Add a check to ensure photoHome is defined and is an array
  if (!Array.isArray(photoHome)) {
    return <p>No photos available</p>;
  }

  return (
    <section className="pt-70 pb-70">
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-lg-4">
            <div className="first-box mt-25">
              <div className="position-relative">
                <h3>PHOTO GALLERY</h3>
                <Link to="/gallery/indee" className="btn-1 btn-2 mt-3">
                  View All
                </Link>
              </div>
            </div>
            {/* Render gallery items dynamically */}
            {photoHome.slice(0, 1).map((photo) => (
              <div className="second-box box-wrap mt-25" key={photo.album_id}>
                <Link to={`/gallery-view/${photo.album_id}`}>
                  <div className="box-img position-relative">
                    <img
                      src={baseFileURL + photo.album_image}
                      alt={photo.album_name}
                      loading="lazy"
                    />
                  </div>
                  <div className="box-text">{photo.album_name}</div>
                </Link>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="col-lg-4">
            {photoHome.slice(1, 3).map((photo) => (
              <div className="second2-box box-wrap mt-25" key={photo.album_id}>
                <Link to={`/gallery-view/${photo.album_id}`}>
                  <div className="box-img position-relative">
                    <img
                      src={baseFileURL + photo.album_image}
                      alt={photo.album_name}
                      loading="lazy"
                    />
                  </div>
                  <div className="box-text">{photo.album_name}</div>
                </Link>
              </div>
            ))}
          </div>

          {/* Third Column */}
          <div className="col-lg-4">
            {photoHome.slice(3).map((photo) => (
              <div className="third-box box-wrap mt-25" key={photo.album_id}>
                <Link to={`/gallery-view/${photo.album_id}`}>
                  <div className="box-img position-relative">
                    <img
                      src={baseFileURL + photo.album_image}
                      alt={photo.album_name}
                      loading="lazy"
                    />
                  </div>
                  <div className="box-text">{photo.album_name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
