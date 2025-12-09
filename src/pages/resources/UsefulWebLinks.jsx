import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getUsefulWebLinks } from "../../services/resourcesApi";
import Skeleton from "react-loading-skeleton";

const UsefulWebLinks = () => {
  const {
    data: usefulLinks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["usefulLinks"],
    queryFn: getUsefulWebLinks,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(usefulLinks?.useful_web_links || "");
  }, [usefulLinks?.useful_web_links]);

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

export default UsefulWebLinks;
