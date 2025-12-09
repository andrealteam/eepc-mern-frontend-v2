import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import { getExportBenefits } from "../../services/homeApi";

const ExportBenefits = () => {
  const {
    data: exportBenefits,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["howExport"],
    queryFn: getExportBenefits,
    gcTime: 180000,
  });

  const sanitizedMessage = useMemo(() => {
    return DOMPurify.sanitize(exportBenefits?.export_benefits || "");
  }, [exportBenefits?.export_benefits]);

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

export default ExportBenefits;
