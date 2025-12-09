import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getAwardPresentationDetails } from "../../services/eventApi";
import NationalAwards52n53 from "./NationalAwards52n53";
import NationalAward55 from "./NationalAwards55";

const AwardWinnerDetails = () => {
  const { slug } = useParams();

  // SlugHandler to decide which component to render based on slug
  const SlugHandler = (urlName) => {
    if (urlName === "52nd-and-53rd-eepc-india-national-awards") {
      return <NationalAwards52n53 />;
    }
    else if (urlName === "55th-eepc-india-national-awards")
    {
      return <NationalAward55/>
    }
    return null; // If the slug doesn't match, return null (nothing is rendered)
  };

  // Check if the slug matches for the special case
  const specialComponent = SlugHandler(slug);

  if (specialComponent) {
    return specialComponent; // If the slug matched, return the special component and stop further rendering
  }

  // Update queryFn to use getAwardDetail with the id
  const {
    data: awardWinnerDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["awardPresentDetail", slug],
    queryFn: () => getAwardPresentationDetails(slug),
    gcTime: 180000,
  });

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  // Fallback to empty details if awardDetail is not available
  const { name, award_winners = "" } = awardWinnerDetail || {};

  // Use memoization on the details (sanitize it) after it has been loaded
  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(award_winners);
  }, [award_winners]);

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <div className="award-detail" style={{marginBottom:"20px"}}>
          <h2 className="mb-4">{name}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
        </div>
      )}
    </>
  );
};

export default AwardWinnerDetails;
