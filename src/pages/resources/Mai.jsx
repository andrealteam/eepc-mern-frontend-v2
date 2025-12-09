import React, { useMemo } from "react";
import { getMai } from "../../services/resourcesApi";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";

const Mai = () => {
  const {
    data: mai,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["mai"],
    queryFn: getMai,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(mai?.mai_assistance || "");
  }, [mai?.mai_assistance]);

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

export default Mai;
