/*import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';*/
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/protected";

  const { isAuthenticated, loading, signin } = useAuth();

  const onSubmit = (formData) => signin(formData);
  if (loading) return "Loading...";
  if (isAuthenticated) return <Navigate to={from} replace />;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", fontSize: "30px" ,color:"brown"}}
    >
      <div className="col-md-4">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>           
            <br />
            <br />
            <br />
            <br />
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              style={{ fontSize: "25px" }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
              className={
                errors.email ? "form-control is-invalid" : "form-control"
              }
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="invalid-feedback">Email is required</div>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              style={{ fontSize: "25px" }}
              className={
                errors.password ? "form-control is-invalid" : "form-control"
              }
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="invalid-feedback">Password is required</div>
            )}
          </div>
          <br />
          <div>
            <small>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "red" }}>
                Register
              </Link>{" "}
              instead
            </small>
            <br />
          </div>
          <br />
          <div data-netlify-recaptcha="true"></div>
          <button
            type="submit"
            className="mt-3 btn btn-success"
            style={{ color :" black", fontSize: "30px" }} 
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
