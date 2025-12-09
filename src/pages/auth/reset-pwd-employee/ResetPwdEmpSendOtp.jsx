import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { resetPwdEmpSendOTP } from "../../../services/authApi";
import { setSessionItemWithExpiry } from "../../../utils/helper/SessionManager";

const ResetPwdEmpSendOtp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, // isSubmitting handles loading state
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await resetPwdEmpSendOTP(data);
      if (response.status) {
        toast.success(response?.message);
        // Store employeeId in sessionStorage with 5-minute expiry
        setSessionItemWithExpiry("empCode", data.employeeId, 300);

        navigate("/auth/verify-employee-otp");
      } else {
        toast.error(response?.message);
        console.error(response?.message);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="employeeId">Employee Code</label>
          <input
            type="text"
            id="employeeId"
            {...register("employeeId", {
              required: "Employee code is required",
            })}
          />
          {errors.employeeId && <p>{errors.employeeId.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Getting OTP..." : "Get OTP"}
        </button>
      </form>
    </div>
  );
};

export default ResetPwdEmpSendOtp;
