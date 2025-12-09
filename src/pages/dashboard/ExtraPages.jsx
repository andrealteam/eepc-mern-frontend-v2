import React from "react";
import { getExtraPages } from "../../services/homeApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import BannerTitle from "../../components/global/BannerTitle";
import { InnerBanner } from "../../components";

const ExtraPages = () => {
  const { url } = useParams();
  console.log("params check", url);
  const {
    data: extraPageData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getExtraPages", url],
    queryFn: () => getExtraPages(url),
    enabled: !!url,
  });
  const WebinarData = extraPageData?.content;
  //   console.log("Extra Pages Data:", extraPageData);
  const sanitizedData = DOMPurify.sanitize(WebinarData);

  const formatTitle = (str) =>
    str
      .split("-") // split by hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize
      .join(" "); // join back with space

  const pathSegment = location.pathname.split("/").filter(Boolean)[1];
  const pageTitle = formatTitle(pathSegment);

  return (
    <>
      {extraPageData?.title && (
        <InnerBanner customTitle={extraPageData?.title} />
      )}

      <div className="container">
        {sanitizedData ? (
          <div dangerouslySetInnerHTML={{ __html: sanitizedData }} />
        ) : (
          <div className="py-5 text-center">
            <h2>404 - Page Not Found</h2>
            <p>The content you are looking for does not exist.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ExtraPages;
