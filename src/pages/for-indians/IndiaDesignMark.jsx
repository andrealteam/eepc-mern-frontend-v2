import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getIndiaDesignMark } from "../../services/indianApi";
import Skeleton from "react-loading-skeleton";

const IndiaDesignMark = () => {
  const {
    data: designMark,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["designMark"],
    queryFn: getIndiaDesignMark,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(designMark?.india_design_mark || "");
  }, [designMark?.india_design_mark]);

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

export default IndiaDesignMark;
