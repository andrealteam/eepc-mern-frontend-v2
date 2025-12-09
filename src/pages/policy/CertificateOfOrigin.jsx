import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getCertificateOfOrigin } from "../../services/policyApi";
import Skeleton from "react-loading-skeleton";

const CertificateOfOrigin = () => {
  const {
    data: certificate,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["certificate"],
    queryFn: getCertificateOfOrigin,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(certificate?.certificate_of_origin || "");
  }, [certificate?.certificate_of_origin]);

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

export default CertificateOfOrigin;
