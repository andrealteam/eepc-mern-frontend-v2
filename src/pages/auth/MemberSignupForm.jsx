import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signupMember } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MemberSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const signup = await signupMember(data);
      if (signup.status) {
        toast.success(signup.message);
        navigate("/auth/login");
      } else {
        toast.error(signup.message);
      }
    } catch (error) {
      toast.error(signup.message);
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Member Signup</h2>
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
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="d-flex align-items-center">
                Signup ... &nbsp;
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
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

export default MemberSignupForm;
