import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getPrivacyPolicy } from "../../services/homeApi";

const PrivacyPolicy = () => {
  const {
    data: privacyPolicy,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["privacyPolicy"],
    queryFn: getPrivacyPolicy,
    gcTime: 180000,
  });

  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(privacyPolicy?.privacy_policy || "");
  }, [privacyPolicy?.privacy_policy]);

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong!"}</p>;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton height={600} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
      )}
    </>
  );
};

export default PrivacyPolicy;
