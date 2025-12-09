import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getHowToExport } from "../../services/homeApi";

const HowToExport = () => {
  const {
    data: howExport,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["howExport"],
    queryFn: getHowToExport,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(howExport?.how_to_export || "");
  }, [howExport?.how_to_export]);

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

export default HowToExport;
