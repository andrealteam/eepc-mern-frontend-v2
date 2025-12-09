import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getForeignTradePolicy } from "../../services/policyApi";
import Skeleton from "react-loading-skeleton";

const ForeignTradePolicy = () => {
  const {
    data: trade,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["trade"],
    queryFn: getForeignTradePolicy,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(trade?.foreign_trade_policy || "");
  }, [trade?.foreign_trade_policy]);

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

export default ForeignTradePolicy;
