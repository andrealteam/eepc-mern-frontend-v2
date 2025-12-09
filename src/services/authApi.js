import {
  api,
  API_MASTER,
  baseFileURL,
  guestLogin,
  memberBaseUrl,
  memberLogin,
  sendFormData,
} from "./api";
import Cookies from "js-cookie";

// Login function for employees
export const loginEmp = async (emp_code, emp_password) => {
  try {
    const res = await api.post("employee-login-new", {
      emp_code: emp_code,
      emp_password: emp_password,
    });
    // If login is successful and we have the token, store it in cookies
    if (res.status === 200 && res.data.token) {
      // Cookies.set("auth_token", res.data.token, {
      //   expires: 4,
      //   secure: true,
      //   sameSite: "Strict",
      // }); // Store the JWT in a cookie
      // Cookies.set("emp_code", res.data.data.emp_code);
      // Cookies.set("emp_name", res.data.data.emp_name);
      return res.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("login emp:", error);
    return { status: false, message: "Login failed" };
  }
};

export const loginMember = async (mem_id, password) => {
  const url = memberBaseUrl + memberLogin;
  const formData = new FormData();

  formData.append("mem_id", mem_id);
  formData.append("user_password", password);

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.is_valid) {
      // Cookies.set("member_id", mem_id);
      // Cookies.set("member_name", res.data.member_name);
      // console.log(res.data)
      return res.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("login member:", error);
    return { is_valid: false, message: "Login failed" };
  }
};

export const loginGuest = async (user_id, password) => {
  const url = guestLogin;

  const formData = new FormData();

  formData.append("user_id", user_id);
  formData.append("user_password", password);

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.is_valid) {
      // Cookies.set("user_id", user_id);
      // Cookies.set("guest_name", res.data.guest_data.Name);
      return res.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    return { is_valid: false, message: error };
  }
};

// Validate the token from the stored JWT in cookies
export const validateToken = async (token) => {
  try {
    if (!token) {
      throw new Error("No token found");
    }

    const res = await api.get(baseFileURL + "api/validate-token", {
      token,
    });

    if (res.status === 200 && res.data.status === true) {
      // Token is valid
      return { status: true, message: "Token is valid", data: res.data.data };
    } else {
      // Token is invalid
      return { status: false, message: "Token is invalid" };
    }
  } catch (error) {
    console.error("Token validation failed:", error);
    return { status: false, message: "Token validation failed" };
  }
};

// Signup function for member
export const signupMember = async (data) => {
  const url = memberBaseUrl + API_MASTER + "member_signup";

  const formData = new FormData();
  formData.append("mem_id", data.memberId);

  try {
    const res = await sendFormData(url, formData);
    // If signup is successful
    if (res.status === 200 && res.data.status) {
      return res.data;
    } else {
      throw new Error(res.data.message);
    }
  } catch (error) {
    console.error("Signup Failed:", error);
    return { status: false, message: "Signup Failed" };
  }
};

// Reset password function for employee to send OTP to mail
export const resetPwdEmpSendOTP = async (data) => {
  try {
    const res = await api.post("employee/forget-password/send-otp", {
      emp_code: data.employeeId,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Employee reset failed:", error);
    return { status: false, message: error.message };
  }
};
// Reset password function for employee to verify OTP recieved in mail
export const resetPwdEmpVerifyOTP = async (data) => {
  try {
    const res = await api.post("employee/forget-password/verify-otp", {
      emp_code: data.employeeId,
      otp: data.otp,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Employee reset failed:", error);
    return { status: false, message: error.message };
  }
};
// Reset password function for employee to change the password
export const resetPwdEmployee = async (data) => {
  try {
    console.log(data);
    const res = await api.post("employee/forget-password/reset-password", {
      emp_code: data.employeeId,
      new_password: data.newPwd,
      confirm_password: data.confirmPwd,
    });

    if (res.status === 200 && res.data.status) {
      return res.data;
    }
  } catch (error) {
    console.error("Employee reset failed:", error);
    return { status: false, message: error.message };
  }
};

// Change password function for employee
export const changePwdEmployee = async (data) => {
  try {
    const res = await api.post("employee/forgot-password", {
      emp_code: data.employeeId,
      old_password: data.oldPwd,
      new_password: data.newPwd,
      confirm_password: data.confirmPwd,
    });

    if (res.status === 200 && res.data.status) {
      return res.data;
    } else {
      throw new Error("Employee reset password failed");
    }
  } catch (error) {
    console.error("Employee failed:", error);
    return { status: false, message: "Employee reset password Failed" };
  }
};

// Reset password function for member
export const resetPwdMember = async (data) => {
  const url = memberBaseUrl + API_MASTER + "reset_member_password";

  const formData = new FormData();
  formData.append("mem_id", data.memberId);
  formData.append("mem_email", data.memberEmail);

  try {
    const res = await sendFormData(url, formData);
    // If signup is successful
    if (res.status === 200 && res.data.status) {
      return res.data;
    } else {
      throw new Error("Member reset password failed");
    }
  } catch (error) {
    console.error("Member failed:", error);
    return { status: false, message: "Member reset password Failed" };
  }
};

// Signup function for guest
export const signupGuest = async (data) => {
  const url = memberBaseUrl + API_MASTER + "website_guest_signup";
  const formData = new FormData();
  formData.append("name", data.guestName);
  formData.append("designation", data.designation);
  formData.append("organization", data.organization);
  formData.append("emailid", data.guestEmail);
  formData.append("mobile", data.mobile);
  formData.append("token_1", "7b4ea52df45cca85fcd1c8ff9a1e33d0b6f9803e");
  formData.append("token_2", "c0800fd6c3558c09b0552121e2591e2df2c9c096");
  console.log(formData);
  try {
    const res = await sendFormData(url, formData);
    // If signup is successful
    if (res.status === 200 && res.data.status) {
      return res.data;
    } else {
      throw new Error("Signup failed");
    }
  } catch (error) {
    console.error("Signup Failed:", error);
    return { status: false, message: "Signup Failed" };
  }
};

// Reset password function for member
export const resetPwdGuest = async (data) => {
  const url = memberBaseUrl + API_MASTER + "forgot_guest_password";

  const formData = new FormData();
  formData.append("user_email", data.guestEmail);

  try {
    const res = await sendFormData(url, formData);
    // If signup is successful
    if (res.status === 200 && res.data.status) {
      return res.data;
    } else {
      throw new Error("Guest reset password failed");
    }
  } catch (error) {
    console.error("Guest reset Failed:", error);
    return { status: false, message: "Guest reset password Failed" };
  }
};
