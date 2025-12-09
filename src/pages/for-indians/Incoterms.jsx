import React, { useMemo } from "react";
import { getIncoterms } from "../../services/indianApi";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";

const Incoterms = () => {
  const {
    data: incoterm,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["incoterms"],
    queryFn: getIncoterms,
    cacheTime: 180000, 
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(incoterm?.incoterms || "");
  }, [incoterm?.incoterms]);

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

export default Incoterms;
