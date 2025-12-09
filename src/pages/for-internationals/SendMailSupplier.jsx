import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query"; // Import useMutation
import "./sendMail.css";
import { postSendMailSupplier } from "../../services/internationalApi";

const SendMailSupplier = () => {
  const location = useLocation(); // To access the state passed during navigation
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const email = location.state?.email; // Retrieve the email from state

  // Mutation hook to handle the email sending
  const mutation = useMutation({
    mutationFn: postSendMailSupplier,
    onSuccess: (data) => {
      toast.success(data);
      navigate("/indian-suppliers");
    },
    onError: (error) => {
      toast.error("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    },
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      mutation.mutate(data); // Trigger mutation
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="send-mail-container">
      <h2>Send Email</h2>
      {email ? (
        <div className="email-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                value={email}
                disabled={true}
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            <div className="button-container">
              <button
                type="button"
                className="btn-discard"
                onClick={() => navigate("/indian-suppliers")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn"
                disabled={isSubmitting || mutation.isLoading} // Disable button while submitting or loading
              >
                {mutation.isLoading ? "Sending..." : "Send Email"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p>No email provided.</p>
      )}
    </div>
  );
};

export default SendMailSupplier;
