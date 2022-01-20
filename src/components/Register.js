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
    <div style={{ display: "flex", justifyContent: "center", fontSize:"30px",color:"brown"}}>
      <div className="col-md-4">       
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>
            <label htmlFor="name">Name :</label>
            <input
              style={{ fontSize:"25px"}}
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
            style={{ fontSize:"25px"}}
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
              style={{ fontSize:"25px"}}
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
          <button type="submit" style={{ color :" black", fontSize: "30px" }} >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
