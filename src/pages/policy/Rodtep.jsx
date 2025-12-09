import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getRodtep } from "../../services/policyApi";
import Skeleton from "react-loading-skeleton";

const Rodtep = () => {
  const {
    data: rodtep,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rodtep"],
    queryFn: getRodtep,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(rodtep?.rodtep || "");
  }, [rodtep?.rodtep]);

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

export default Rodtep;
