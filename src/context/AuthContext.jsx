import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import {
  loginEmp,
  loginGuest,
  loginMember,
  validateToken,
} from "../services/authApi";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userType = Cookies.get("role");

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("auth_token");
      const emp_code = Cookies.get("emp_code");
      const emp_name = Cookies.get("emp_name");
      const emp_office = Cookies.get("emp_office");
      const memberId = Cookies.get("member_id");
      const userId = Cookies.get("user_id");
      const loggedInUserName = Cookies.get("loggedInUserName");

      try {
        if (userType === "employee" && token) {
          const tokenStatus = await validateToken(token);
          if (tokenStatus.status) {
            const savedUser = {
              emp_code,
              emp_name,
              emp_office,
              token,
              loggedInUserName,
              role: userType,
            };
            setUser(savedUser);
            setError(null);
          } else {
            logout();
            setError("Invalid token, please log in again.");
          }
        } else if (userType === "member" && memberId) {
          setUser({ member_id: memberId, loggedInUserName, role: userType });
        } else if (userType === "guest" && userId) {
          setUser({ user_id: userId, loggedInUserName, role: userType });
        } else {
          setError("No user found, please log in.");
        }
      } catch {
        logout();
        setError("Authentication failed. Please log in again.");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [userType]);

  const login = async (data, role) => {
    try {
      let loginData;

      switch (role) {
        case "employee":
          loginData = await loginEmp(data.employeeCode, data.password);
          break;
        case "member":
          loginData = await loginMember(data.memberId, data.password);
          break;
        case "guest":
          loginData = await loginGuest(data.userId, data.password);
          break;
        default:
          throw new Error("Invalid user type");
      }

      if (!loginData) {
        setError("Login failed, please check your credentials.");
        return false;
      }

      // Common: Set role in cookies
      Cookies.set("role", role, {
        expires: 4 / 24,
        // secure: true,
        // sameSite: "Strict",
      });

      // Handle each role
      switch (role) {
        case "employee":
          if (loginData.token) {
            Cookies.set("auth_token", loginData.token, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            Cookies.set("emp_code", loginData.data.emp_code, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            Cookies.set("emp_name", loginData.data.emp_name, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            Cookies.set("emp_office", loginData.data.emp_office, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            Cookies.set("loggedInUserName", loginData.data.emp_name, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });

            // localStorage.setItem("loggedInUserName", loginData.data.emp_name);

            setUser({
              emp_code: loginData.data.emp_code,
              emp_name: loginData.data.emp_name,
              emp_office: loginData.data.emp_office,
              token: loginData.token,
              loggedInUserName: loginData.data.emp_name,
              role,
            });
          } else {
            setError("Login failed, please check your credentials.");
            return false;
          }
          break;

        case "member":
          if (loginData.is_valid) {
            Cookies.set("member_id", data.memberId, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            Cookies.set("loggedInUserName", loginData.member_name, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            // let userData = localStorage.setItem(
            //   "loggedInUserName",
            //   loginData.member_name
            // );

            // ✅ Create hidden iframe to communicate with 3001
            let iframe = document.getElementById("syncFrame");
            if (!iframe) {
              iframe = document.createElement("iframe");
              iframe.id = "syncFrame";
              iframe.src = "https://eepc-exporter-home-page.vercel.app/receiver.html";
              // "https://eepc-exporter-home-page.vercel.app/receiver.html";
              iframe.style.display = "none";
              document.body.appendChild(iframe);

              // ✅ Wait for iframe to load before sending message
              iframe.onload = () => {
                console.log("📡 iframe loaded, sending login data...");
                iframe.contentWindow.postMessage(
                  {
                    type: "LOGIN",
                    payload: { member_name: loginData.member_name },
                  },
                  "https://eepc-exporter-home-page.vercel.app"
                  // "https://eepc-exporter-home-page.vercel.app"
                );
              };
            } else {
              // ✅ If iframe already exists, send directly
              iframe.contentWindow.postMessage(
                {
                  type: "LOGIN",
                  payload: { member_name: loginData.member_name },
                },
                "https://eepc-exporter-home-page.vercel.app"
                // "https://eepc-exporter-home-page.vercel.app"
              );
            }

            //write logic here of sending data in 3001

            console.log("data in login", loginData.member_name);

            setUser({
              member_id: data.memberId,
              loggedInUserName: loginData.member_name,
              role,
            });
          } else {
            setError("Login failed, please check your credentials.");
            return false;
          }
          break;

        case "guest":
          if (loginData.is_valid) {
            const emailId = loginData.guest_data.EmailId;
            Cookies.set("user_id", emailId, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });
            Cookies.set("loggedInUserName", loginData.guest_data.Name, {
              expires: 4 / 24,
              secure: true,
              sameSite: "Strict",
            });

            setUser({
              user_id: emailId,
              loggedInUserName: loginData.guest_data.Name,
              role,
            });
          } else {
            setError("Login failed, please check your credentials.");
            return false;
          }
          break;
      }

      setError(null);
      return true;
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred while logging in.");
      return false;
    }
  };

  const logout = () => {
    [
      "auth_token",
      "member_id",
      "user_id",
      "emp_code",
      "emp_name",
      "emp_office",
      "guest_name",
      "role",
      "loggedInUserName",
    ].forEach(Cookies.remove);

    ["emp_code", "member_id", "user_id", "role"].forEach((key) =>
      localStorage.removeItem(key)
    );
    localStorage.removeItem("loggedInUserName");

    // ✅ Create hidden iframe to communicate with 3001
    let iframe = document.getElementById("syncFrame");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "syncFrame";
      iframe.src =
        // "https://eepc-exporter-home-page.vercel.app/receiver.html";
        "https://eepc-exporter-home-page.vercel.app/receiver.html";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      // ✅ Wait for iframe to load before sending message
      iframe.onload = () => {
        console.log("📡 iframe loaded, sending login data...");
        iframe.contentWindow.postMessage(
          { type: "LOGOUT", payload: { member_name: undefined } },
          // "https://eepc-exporter-home-page.vercel.app"
          "https://eepc-exporter-home-page.vercel.app"
        );
      };
    } else {
      // ✅ If iframe already exists, send directly
      iframe.contentWindow.postMessage(
        { type: "LOGOUT", payload: { member_name: undefined } },
        // "https://eepc-exporter-home-page.vercel.app"
        "https://eepc-exporter-home-page.vercel.app"
      );
    }

    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
