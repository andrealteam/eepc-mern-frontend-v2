import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getSeniorViceChairman } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";

const SeniorViceChairman = () => {
  const {
    data: vc,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["vc"],
    queryFn: getSeniorViceChairman,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(
      vc?.election_for_the_post_of_senior_vice_chairman || ""
    );
  }, [vc?.election_for_the_post_of_senior_vice_chairman]);

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

export default SeniorViceChairman;
