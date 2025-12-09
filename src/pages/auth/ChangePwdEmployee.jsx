import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { changePwdEmployee } from "../../services/authApi";

const ChangePwdEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
    clearErrors,
  } = useForm();

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Watch the new password field
  const newPwd = watch("newPwd", "");

  // Function to handle password match on confirm password field change
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
      const reset = await changePwdEmployee(data);
      console.log(reset);
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
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            id="employeeId"
            {...register("employeeId", {
              required: "Employee ID is required",
            })}
            value={user.emp_code}
            placeholder={user.emp_code}
          />
          {errors.employeeId && <p>{errors.employeeId.message}</p>}
        </div>
        <div>
          <label htmlFor="oldPwd">Old Password</label>
          <input
            type="text"
            id="oldPwd"
            {...register("oldPwd", {
              required: "Old Password is required",
            })}
          />
          {errors.oldPwd && <p>{errors.oldPwd.message}</p>}
        </div>
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
            onChange={handleConfirmPwdChange} // Trigger password match validation on change
          />
          {errors.confirmPwd && <p>{errors.confirmPwd.message}</p>}
        </div>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Changing..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ChangePwdEmployee;
