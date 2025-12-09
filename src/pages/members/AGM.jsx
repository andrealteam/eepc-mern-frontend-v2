import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { getAGM } from "../../services/membersApi";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";

const AGM = () => {
  const {
    data: agm,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["agm"],
    queryFn: getAGM,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(agm?.annual_general_meeting);
  }, [agm?.annual_general_meeting]);

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

export default AGM;
