import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getTermsOfUse } from "../../services/homeApi";

const TermsOfUse = () => {
  const {
    data: termsOfUse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["termsOfUse"],
    queryFn: getTermsOfUse,
    gcTime: 180000,
  });

  const sanitizedData = useMemo(() => {
    return DOMPurify.sanitize(termsOfUse?.terms_of_use || "");
  }, [termsOfUse?.terms_of_use]);

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

export default TermsOfUse;
