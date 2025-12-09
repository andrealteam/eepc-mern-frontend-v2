import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getMembershipBenefits } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";

const MembershipBenefits = () => {
  const {
    data: membership,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["membership"],
    queryFn: getMembershipBenefits,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(membership?.membership_benefits || "");
  }, [membership?.membership_benefits]);

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

export default MembershipBenefits;
