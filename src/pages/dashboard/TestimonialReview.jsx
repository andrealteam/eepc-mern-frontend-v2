import React, { useState } from "react";
import {
  getAllReviewTestimonials,
  postReviewTestimonial,
} from "../../services/dashboardMemberApi ";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { DataTableCustom } from "../../components";
import { formatDate } from "../../utils/helper/DateFormatter";
import toast from "react-hot-toast";

const TestimonialReview = () => {
  const { user, loading, error } = useAuth();
  const member_id = user?.member_id;
  const {
    data: testimonialsData,
    isLoading: isTestimonialsLoading,
    isError: isTestimonialsError,
    error: testimonialsError,
  } = useQuery({
    queryKey: ["review-testimonials", member_id],
    queryFn: () => getAllReviewTestimonials(member_id),
    cacheTime: 180000,
  });
  const queryClient = useQueryClient();

  const commonDataColumns = [
    {
      name: "Date",
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => <>{formatDate(row.created_at)}</>,
    },
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => row.name,
    },
    {
      name: "User Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => row.email,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
      cell: (row) => row.designation,
    },
    {
      name: "Review Content",
      selector: (row) => row.testimonial,
      sortable: true,
      cell: (row) => <ExpandableText text={row.testimonial} />,
    },
    {
      name: "Action",
      selector: (row) => row.is_live,
      sortable: true,
      cell: (row) => (
        <button
          onClick={() => {
            if (window.confirm("Do you want to change review status?")) {
              handleStatusChange(row);
            }
          }}
          style={{
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: row.is_live === "1" ? "green" : "orange",
            color: "#fff",
          }}
        >
          {row.is_live === "1" ? "Approved" : "Review"}
        </button>

      ),
    },
  ];

  // function for API call
  const handleStatusChange = async (row) => {
    console.log("Toggling status for row:", row);
    try {
      let res = await postReviewTestimonial(
        row.id,
        row.is_live === "1" ? "0" : "1"
      );
      if (res.status) {
        toast.success(res?.message);
        queryClient.invalidateQueries(["review-testimonials"]);
      } else {
        toast.error(res?.message);
      }
      // refresh data (ya to API refetch ya local state update)
      // refetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const commonSearchFields = [
    "date",
    "name",
    "email",
    "designation",
    "testimonial",
  ];
  const commonSortBy = "date";

  if (isTestimonialsLoading) return <div>Loading...</div>;
  if (isTestimonialsError) return <div>Error: {testimonialsError.message}</div>;

  console.log("Testimonial Data:", testimonialsData);

  return (
    <div>
      <DataTableCustom
        title="Testimonials Review"
        data={testimonialsData || []}
        columns={commonDataColumns}
        searchFields={commonSearchFields}
        defaultSortBy={commonSortBy}
      />
    </div>
  );
};

const ExpandableText = ({ text, maxLength = 50 }) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return <span>-</span>;

  const isLong = text.length > maxLength;
  const displayText = expanded
    ? text
    : text.slice(0, maxLength) + (isLong ? "..." : "");

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "250px",
        whiteSpace: "pre-wrap",
      }}
    >
      <span>{displayText}</span>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            marginLeft: "5px",
            fontSize: "12px",
          }}
        >
          {expanded ? (
            <>
              Show less{" "}
              <i
                className="fa-solid fa-chevron-up"
                style={{ fontSize: "10px" }}
              ></i>
            </>
          ) : (
            <>
              Show more{" "}
              <i
                className="fa-solid fa-chevron-down"
                style={{ fontSize: "10px" }}
              ></i>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default TestimonialReview;
