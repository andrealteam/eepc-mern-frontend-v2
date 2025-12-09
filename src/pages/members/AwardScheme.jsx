import React from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getAwardScheme } from "../../services/membersApi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const AwardScheme = () => {
  const {
    data: awards,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["awards"],
    queryFn: getAwardScheme,
    gcTime: 180000,
  });

  if (isError) {
    return <div>Error: {error.message || "Something went wrong!"}</div>;
  }

  // Safe data extraction
  const national_award_scheme = awards?.national_award_scheme || [];
  const eastern_region = awards?.eastern_region || [];
  const western_region = awards?.western_region || [];
  const northern_region = awards?.northern_region || [];
  const southern_region = awards?.southern_region || [];

  return (
    <>
      {isLoading ? (
        <Skeleton height={500} width="100%" />
      ) : (
        <>
          {[
            { title: "NATIONAL AWARDS SCHEME", awards: national_award_scheme },
            { title: "EASTERN REGION", awards: eastern_region },
            { title: "WESTERN REGION", awards: western_region },
            { title: "NORTHERN REGION", awards: northern_region },
            { title: "SOUTHERN REGION", awards: southern_region },
          ].map((region, idx) => (
            <div className="award-container" key={idx}>
              <h2>{region.title}</h2>

              <ul>
                {region.awards?.map((item, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faTrophy} />

                    <Link to={`/award-scheme/${item.slug}`}>
                      {item.name}
                    </Link>

                    {/* ⭐ Show NEW badge only when is_new === "1" */}
                    {item.is_new === "1" && (
                      <span className="label label-success">
                        <img
                          src="https://icon-library.com/images/new-icon-gif/new-icon-gif-4.jpg"
                          alt="new"
                          style={{ width: "50px" }}
                        />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AwardScheme;
