import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getCommittees } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";

const Committees = () => {
  const {
    data: committees,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["committees"],
    queryFn: getCommittees,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(committees?.committees || "");
  }, [committees?.committees]);

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

export default Committees;
