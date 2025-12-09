import React from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { getFAQs } from "../../services/aboutApi";
import Skeleton from "react-loading-skeleton";

const FAQPage = () => {
  const {
    data: faqs,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFAQs,
    gcTime: 180000,
  });

  console.log("faq dataaaa",faqs)

  if (isLoading) <section>Loading...</section>;
  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <>
      <div className="accordion faq-accordion" id="accordionExample">
  {isLoading ? (
    <Skeleton height={100} count={6} />
  ) : (
    faqs
      ?.filter((faq) => faq.id !== "36") // Exclude ID 36
      .map((faq, index) => {
        const { id, question, answer } = faq;
        const sanitizedAnswer = DOMPurify.sanitize(answer);

        return (
          <div className="accordion-item" key={id}>
            <h2 className="accordion-header" id={`heading${id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${id}`}
              >
                {question}
              </button>
            </h2>
            <div
              id={`collapse${id}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading${id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div
                  className="points"
                  dangerouslySetInnerHTML={{ __html: sanitizedAnswer }}
                />
              </div>
            </div>
          </div>
        );
      })
  )}
</div>

    </>
  );
};

export default FAQPage;
