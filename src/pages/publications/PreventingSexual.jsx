import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getPreventingSexualHarassment } from "../../services/publicationApi";
import Skeleton from "react-loading-skeleton";

const PreventingSexual = () => {
  const {
    data: prevent,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["prevent"],
    queryFn: getPreventingSexualHarassment,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(prevent?.preventing_sexual_harassment || "");
  }, [prevent?.preventing_sexual_harassment]);

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

export default PreventingSexual;
