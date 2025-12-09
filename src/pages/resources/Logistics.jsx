import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getLogistics } from "../../services/resourcesApi";
import Skeleton from "react-loading-skeleton";

const Logistics = () => {
  const {
    data: logistics,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["logistics"],
    queryFn: getLogistics,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(logistics?.logistics || "");
  }, [logistics?.logistics]);

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

export default Logistics;
