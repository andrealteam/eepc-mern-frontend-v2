import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { postGetInTouch } from "../../services/homeApi";

const EnquiryForm = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Set up the mutation hook to handle the form submission
  const mutation = useMutation({
    mutationFn: postGetInTouch,
    onSuccess: (data) => {
      // Show a success toast message
      toast.success("Form submitted successfully!", data.message);
      reset(); // Reset form on success
    },
    onError: (error) => {
      // Show an error toast message
      toast.error("Error submitting form!", error.message);
    },
  });

  // Form submission handler
  const onSubmit = (data) => {
    // Trigger the mutation with form data
    mutation.mutate(data);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <form onSubmit={handleSubmit(onSubmit)} className="enquiry-form">
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>

          {/* Organization Field */}
          <div className="mb-3">
            <label htmlFor="organization" className="form-label">
              Organization
            </label>
            <input
              type="text"
              className="form-control"
              id="organization"
              name="organization"
              {...register("organization", {
                required: "Organization is required",
              })}
            />
            {errors.organization && (
              <p className="text-danger">{errors.organization.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          {/* Mobile Field */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              {...register("phone", { required: "Mobile number is required" })}
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-danger">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              {...register("message")}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
