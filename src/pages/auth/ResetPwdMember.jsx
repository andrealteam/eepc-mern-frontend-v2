import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { resetPwdMember, signupMember } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const ResetPwdMember = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const { logout } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);
    
    try {
      const reset = await resetPwdMember(data);
      console.log(reset);

      if (reset.status) {
        toast.success("Password reset successful! You will be logged out.");
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
          <label htmlFor="memberId">Member ID</label>
          <div className="input-group">
            <span className="input-group-text">M</span>
            <input
              type="text"
              id="memberId"
              {...register("memberId", {
                required: "Member ID is required",
              })}
            />
          </div>
          {errors.memberId && <p>{errors.memberId.message}</p>}
        </div>
        <div>
          <label htmlFor="memberEmail">Member Email</label>
          <input
            type="email"
            id="memberEmail"
            {...register("memberEmail", {
              required: "Email ID is required",
            })}
          />
          {errors.memberEmail && <p>{errors.memberEmail.message}</p>}
        </div>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="d-flex align-items-center">
                Resetting ... &nbsp;
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Resetting...</span>
                </div>
              </div>
            </>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPwdMember;
