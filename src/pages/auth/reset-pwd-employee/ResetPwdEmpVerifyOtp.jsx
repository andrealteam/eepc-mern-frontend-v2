import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import OtpInput from "react-otp-input";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { resetPwdEmpVerifyOTP } from "../../../services/authApi";
import { getSessionItemWithExpiry } from "../../../utils/helper/SessionManager";

const ResetPwdEmpVerifyOtp = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const empCode = getSessionItemWithExpiry("empCode");

  // 🔐 Route Guard: Block access if Employee code is not valid
  useEffect(() => {
    if (!empCode) {
      toast.error("Employee not found");
      navigate("/auth/reset-password-employee");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        employeeId: empCode,
      };
      const response = await resetPwdEmpVerifyOTP(payload);

      if (response.status) {
        toast.success(response.message || "OTP verified successfully");
        navigate("/auth/reset-employee-password-change");
      } else {
        toast.error(response.message);
        console.error(response.message);
      }
    } catch (error) {
      toast.error(error.message || "OTP verification failed");
      console.error("Error during reset password:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name="otp"
            rules={{
              required: "OTP is required",
              minLength: { value: 6, message: "OTP must be 6 digits" },
            }}
            render={({ field }) => (
              <OtpInput
                value={field.value || ""}
                onChange={field.onChange}
                numInputs={6}
                isInputNum={true}
                renderInput={(props) => (
                  <input
                    {...props}
                    inputMode="numeric" // Ensures mobile keyboards show numeric input
                    pattern="[0-9]*" // Restricts to only numeric values
                    maxLength={1} // Limit to 1 character per input field
                    style={{
                      margin: "0 0.25rem",
                      textAlign: "center",
                    }}
                  />
                )}
              />
            )}
          />
          {errors.otp && <p>{errors.otp.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default ResetPwdEmpVerifyOtp;
