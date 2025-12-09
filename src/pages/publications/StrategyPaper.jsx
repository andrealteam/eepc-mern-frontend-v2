import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getStrategy } from "../../services/publicationApi";
import Skeleton from "react-loading-skeleton";

const StrategyPaper = () => {
  const {
    data: strategy,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["strategy"],
    queryFn: getStrategy,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(strategy?.strategy_paper || "");
  }, [strategy?.strategy_paper]);

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

export default StrategyPaper;
