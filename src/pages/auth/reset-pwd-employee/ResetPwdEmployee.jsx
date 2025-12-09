import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPwdEmployee } from "../../../services/authApi";
import { getSessionItemWithExpiry } from "../../../utils/helper/SessionManager";

const ResetPwdEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
    clearErrors,
  } = useForm();

  const navigate = useNavigate();
  const empCode = getSessionItemWithExpiry("empCode");
  const newPwd = watch("newPwd", "");

  // 🔐 Route Guard: Block access if Employee code is not valid
  useEffect(() => {
    if (!empCode) {
      toast.error("Employee not found");
      navigate("/auth/reset-password-employee");
    }
  }, [navigate]);

  const handleConfirmPwdChange = (event) => {
    const confirmPwd = event.target.value;
    if (confirmPwd !== newPwd) {
      setError("confirmPwd", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      clearErrors("confirmPwd");
    }
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        employeeId: empCode,
      };
      const response = await resetPwdEmployee(payload);

      if (response.status) {
        toast.success(response.message);
        sessionStorage.removeItem("empCode");
        navigate("/auth/login");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error during reset password:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="newPwd">New Password</label>
          <input
            type="text"
            id="newPwd"
            {...register("newPwd", {
              required: "New Password is required",
            })}
          />
          {errors.newPwd && <p>{errors.newPwd.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPwd">Confirm Password</label>
          <input
            type="text"
            id="confirmPwd"
            {...register("confirmPwd", {
              required: "Confirm Password is required",
            })}
            onChange={handleConfirmPwdChange}
          />
          {errors.confirmPwd && <p>{errors.confirmPwd.message}</p>}
        </div>

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPwdEmployee;
