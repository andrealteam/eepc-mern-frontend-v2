import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signupGuest } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GuestSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const signup = await signupGuest(data);
      if (signup.status) {
        toast.success(signup.message);
        navigate("/auth/login");
      } else {
        toast.error("Signup failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Guest Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="guestName">Name</label>
          <input
            type="text"
            id="guestName"
            {...register("guestName", {
              required: "Employee Code is required",
            })}
          />
          {errors.guestName && <p>{errors.guestName.message}</p>}
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            {...register("designation", {
              required: "Employee Code is required",
            })}
          />
          {errors.designation && <p>{errors.designation.message}</p>}
        </div>
        <div>
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            {...register("organization", {
              required: "Employee Code is required",
            })}
          />
          {errors.organization && <p>{errors.organization.message}</p>}
        </div>
        <div>
          <label htmlFor="guestEmail">Email ID</label>
          <input
            type="email"
            id="guestEmail"
            {...register("guestEmail", {
              required: "Employee Code is required",
            })}
          />
          {errors.guestEmail && <p>{errors.guestEmail.message}</p>}
        </div>
        <div>
          <label htmlFor="mobile">Mobile No.</label>
          <input
            type="tel"
            id="mobile"
            {...register("mobile", {
              required: "Employee Code is required",
            })}
          />
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="d-flex align-items-center">
                Signing ... &nbsp;
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Singing ...</span>
                </div>
              </div>
            </>
          ) : (
            "Signup"
          )}
        </button>
      </form>
    </div>
  );
};

export default GuestSignupForm;
