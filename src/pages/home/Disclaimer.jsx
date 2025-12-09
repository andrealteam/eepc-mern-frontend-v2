import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getDisclaimer } from "../../services/homeApi";

const Disclaimer = () => {
  const {
    data: disclaimer,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["disclaimer"],
    queryFn: getDisclaimer,
    gcTime: 180000,
  });

  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(disclaimer?.disclaimer || "");
  }, [disclaimer?.disclaimer]);

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

export default Disclaimer;
