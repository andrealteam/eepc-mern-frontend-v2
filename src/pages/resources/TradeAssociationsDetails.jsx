import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getTradeAssociationDetail } from "../../services/resourcesApi";

const TradeAssociationsDetails = () => {
  const { slug } = useParams();

  const {
    data: tradeDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tradeDetails", slug],
    queryFn: () => getTradeAssociationDetail(slug),
    gcTime: 180000,
  });

  if (isError) {
    return <p>Error: {error.message || "Something went wrong!"}</p>;
  }

  // Fallback to empty details if awardDetail is not available
  const { name, details = "" } = tradeDetails || {};

  // Use memoization on the details (sanitize it) after it has been loaded
  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(details);
  }, [details]);

  if (!tradeDetails) {
    return <p>No award detail found.</p>;
  }

  return (
    <>
      {" "}
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <div className="award-detail">
          <h2>{name}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
        </div>
      )}
    </>
  );
};

export default TradeAssociationsDetails;
