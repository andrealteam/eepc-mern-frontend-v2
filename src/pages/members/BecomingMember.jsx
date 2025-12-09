import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getBecomingMember } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";

const BecomingMember = () => {
  const {
    data: member,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["member"],
    queryFn: getBecomingMember,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(member?.becoming_a_member || "");
  }, [member?.becoming_a_member]);

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

export default BecomingMember;
