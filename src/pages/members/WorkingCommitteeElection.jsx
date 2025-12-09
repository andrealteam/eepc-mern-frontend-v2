import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getWorkingCommitteeElection } from "../../services/membersApi";
import Skeleton from "react-loading-skeleton";

const WorkingCommitteeElection = () => {
  const {
    data: workingCommitteeElection,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["workingCommittee"],
    queryFn: getWorkingCommitteeElection,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(
      workingCommitteeElection?.working_committee_election || ""
    );
  }, [workingCommitteeElection?.working_committee_election]);

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
export default WorkingCommitteeElection;
