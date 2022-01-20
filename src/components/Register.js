/*import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';*/
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/protected";

  const { isAuthenticated, signup } = useAuth();

  const onSubmit = (formData) => signup(formData);

  if (isAuthenticated) return <Navigate to={from} replace />;
  return (
    <form>
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
      ></form>
      <form>
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              className={
                errors.name ? "form-control is-invalid" : "form-control"
              }
              {...register("name", { required: true })}
            />
            {errors.name && <div>Name is required</div>}
          </div>
          <br />
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
              className={
                errors.email ? "form-control is-invalid" : "form-control"
              }
              {...register("email", { required: true })}
            />
            {errors.email && <div>Email is required</div>}
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className={
                errors.password ? "form-control is-invalid" : "form-control"
              }
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <div>Password is required</div>}
          </div>
          <br />
          <div>
            <small>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "red" }}>
                {" "}
                Log in
              </Link>{" "}
              instead
            </small>
            <br />
          </div>
          <br />
          <div data-netlify-recaptcha="true"></div>
          <button type="submit" style={{ color: "red" }}>
            Register
          </button>
        </form>
      </form>
    </form>
  );
};

export default Register;
