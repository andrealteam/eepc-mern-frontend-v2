import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getIndiaSnapshot } from "../../services/internationalApi";
import Skeleton from "react-loading-skeleton";

const IndiaSnapshot = () => {
  const {
    data: snapshot,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["snapshot"],
    queryFn: getIndiaSnapshot,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(snapshot?.india_a_snapshot);
  }, [snapshot?.india_a_snapshot]);

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
export default IndiaSnapshot;
