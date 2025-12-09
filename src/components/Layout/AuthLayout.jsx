import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="pt-70 pb-70">
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
