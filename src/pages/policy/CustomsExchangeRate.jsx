import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getCustomsExchangeRate } from "../../services/policyApi";
import Skeleton from "react-loading-skeleton";

const CustomsExchangeRate = () => {
  const {
    data: exchange,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["exchange"],
    queryFn: getCustomsExchangeRate,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(exchange?.customs_exchange_rate || "");
  }, [exchange?.customs_exchange_rate]);

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

export default CustomsExchangeRate;
