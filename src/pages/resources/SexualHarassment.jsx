import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getSexualHarassment } from "../../services/resourcesApi";
import Skeleton from "react-loading-skeleton";

const SexualHarassment = () => {
  const {
    data: harassment,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["harassment"],
    queryFn: getSexualHarassment,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(harassment?.sexual_harassment || "");
  }, [harassment?.sexual_harassment]);

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

export default SexualHarassment;
