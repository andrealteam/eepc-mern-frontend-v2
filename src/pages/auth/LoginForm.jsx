// components/auth/LoginForm.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import "./auth.css";
import { use } from "react";

const LoginForm = () => {
  const [role, setRole] = useState("member");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const { login, user } = useAuth();

  // Reset form fields when role changes
  useEffect(() => {
    reset(); // clear all form fields
  }, [role, reset]);
  useEffect(() => {
    if (!user || !role) return; // must wait for both

    if (role === "member") {
      navigate("/dashboard/member-profile");
    } else if (role === "employee") {
      navigate("/dashboard/employee-profile");
    } else if (role === "guest") {
      navigate("/dashboard/guest-profile");
    }
  }, [role, user]);

  const onSubmit = async (data) => {
    const success = await login(data, role);
    if (success) {
      toast.success("Login successful");

      if (role === "employee") {
        navigate("/dashboard/employee-profile");
      } else if (role === "member") {
        navigate("/dashboard/member-profile");
      } else if (role === "guest") {
        navigate("/dashboard/guest-profile");
      } else {
        navigate("/dashboard");
      }
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const renderFormFields = () => {
    switch (role) {
      case "member":
        return (
          <>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="mt-3">
              Forgot your password?{" "}
              <Link
                to="/auth/reset-password-member"
                className="forgot-password"
              >
                Reset Password
              </Link>
            </div>
            <div className="mt-3">
              Don’t have an account?{" "}
              <Link to="/auth/member-signup" className="sign-up">
                Sign Up
              </Link>
            </div>
          </>
        );

      case "employee":
        return (
          <>
            <div>
              <label htmlFor="employeeCode">Employee Code</label>
              <input
                type="text"
                id="employeeCode"
                {...register("employeeCode", {
                  required: "Employee Code is required",
                })}
              />
              {errors.employeeCode && <p>{errors.employeeCode.message}</p>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="mt-3">
              Forgot your password?{" "}
              <Link
                to="/auth/reset-password-employee"
                className="forgot-password"
              >
                Reset Password
              </Link>
            </div>
          </>
        );

      case "guest":
        return (
          <>
            <div>
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                {...register("userId", { required: "User ID is required" })}
              />
              {errors.userId && <p>{errors.userId.message}</p>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="mt-3">
              Forgot your password?{" "}
              <Link to="/auth/reset-password-guest" className="forgot-password">
                Reset Password
              </Link>
            </div>
            <div className="mt-3">
              Don’t have an account?{" "}
              <Link to="/auth/guest-signup" className="sign-up">
                Sign Up
              </Link>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <select onChange={handleRoleChange} value={role} className="mb-3">
        <option value="member">Member</option>
        <option value="employee">Employee</option>
        <option value="guest">Guest</option>
      </select>

      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFormFields()}
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
