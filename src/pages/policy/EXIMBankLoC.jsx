import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getEXIMBankLoC } from "../../services/policyApi";
import Skeleton from "react-loading-skeleton";

const EXIMBankLoC = () => {
  const {
    data: loc,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["loc"],
    queryFn: getEXIMBankLoC,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(loc?.exim_bank_loc || "");
  }, [loc?.exim_bank_loc]);

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

export default EXIMBankLoC;
