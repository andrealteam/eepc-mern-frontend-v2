import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getBriefProfile } from "../../services/aboutApi";
import Skeleton from "react-loading-skeleton";

const BriefProfile = () => {
  const {
    data: brief,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["brief"],
    queryFn: getBriefProfile,
    gcTime: 180000,
  });

  // Extract data from the response
  const { brief_profile } = brief || {};

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(brief_profile || "");
  }, [brief_profile]);

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

export default BriefProfile;
