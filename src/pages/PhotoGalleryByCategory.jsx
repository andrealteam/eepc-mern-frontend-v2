import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getPhotoByCategory } from "../services/photoApi";
import { baseFileURL } from "../services/api";

const PhotoGalleryByCategory = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: photoGallery,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["photoGallery", category],
    queryFn: () => getPhotoByCategory(category),
    gcTime: 180000,
  });

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  const filteredPhotos = useMemo(() => {
    if (!photoGallery) return [];
    return photoGallery?.filter((photo) =>
      photo.album_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photoGallery, searchTerm]);

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <>
          <div className="row">
            <div className="col-lg-8 ">
              <h2>Photo Gallery</h2>
            </div>
            <div className="search-container mb-4 col-lg-4">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>

          <div className="row">
            {filteredPhotos.length === 0 ? (
              <p>No photos found for this category.</p>
            ) : (
              filteredPhotos.map((photo) => (
                <div
                  key={photo.album_id}
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                >
                  <Link to={`/gallery-view/${photo.album_id}`}>
                    <div className="card card-style">
                      <img
                        src={baseFileURL + photo.album_image}
                        alt={photo.album_name}
                        className="card-img-top"
                         loading="lazy"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{photo.album_name}</h5>
                        <p className="card-text">{photo.album_location}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PhotoGalleryByCategory;
