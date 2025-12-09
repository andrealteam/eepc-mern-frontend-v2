import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getAwardDetail } from "../../services/resourcesApi";

const AwardSchemeDetails = () => {
  const { id } = useParams();

  // Update queryFn to use getAwardDetail with the id
  const {
    data: awardDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["awardDetail", id],
    queryFn: () => getAwardDetail(id),
    gcTime: 180000,
  });

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  // Fallback to empty details if awardDetail is not available
  const { name, details = "" } = awardDetail || {};

  // Use memoization on the details (sanitize it) after it has been loaded
  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(details);
  }, [details]);

  // Display loading skeleton while the data is loading
  if (isLoading) {
    return <Skeleton height={600} />;
  }

  if (!awardDetail) {
    return <p>No award detail found.</p>;
  }

  return (
    <div className="award-detail" style={{marginBottom:"20px"}}>
      <h2>{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
    </div>
  );
};

export default AwardSchemeDetails;
