"use client"; // this is a client component 👈🏽

import React, { useState } from "react";
import "../../src/app/(authR)/login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(email, password);
    localStorage.setItem("sucess", true);
    router.push("/");
  };

  return (
    <>
      <div className="register-container">
        <div className="form">
          <div className="form-body">
            <div>
              <h2 className="register_name">Login Here</h2>
            </div>

            <div className="email">
              <label htmlFor="email">Email </label>
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter Your Email"
              />
              <br />
              <br />
            </div>
            <div className="password">
              <label htmlFor="password">Password </label> <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Enter Your Password"
              />
              <br />
              <br />
            </div>
          </div>
          <div className="footer">
            <div className="take-to-login">
              Don't have a account?{" "}
              <Link href="/pages/register">signup here</Link>{" "}
            </div>
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="register_btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
