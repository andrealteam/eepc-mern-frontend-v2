import React from "react";
import { useForm } from "react-hook-form";
import { resetPwdGuest } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const ResetPwdGuest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const reset = await resetPwdGuest(data);
      if (reset.status) {
        toast.success(reset.message);
        logout();
        navigate("/auth/login");
      } else {
        toast.error("Reset password failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error during reset password:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="guestEmail">Guest Email</label>
          <input
            type="email"
            id="guestEmail"
            {...register("guestEmail", {
              required: "Email ID is required",
            })}
          />
          {errors.guestEmail && <p>{errors.guestEmail.message}</p>}
        </div>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPwdGuest;
