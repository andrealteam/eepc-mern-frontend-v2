import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getDeputyRegionalChairmen } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";

const DeputyRegionalChairmen = () => {
  const {
    data: drc,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["drc"],
    queryFn: getDeputyRegionalChairmen,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(drc?.deputy_regional_chairmen || "");
  }, [drc?.deputy_regional_chairmen]);

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong!"}</p>;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: sanitizedMessage }} />
      )}
    </>
  );
};

export default DeputyRegionalChairmen;
