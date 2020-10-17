import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="auth">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          className="auth__logo"
          alt=""
        />
      </Link>
      <div className="auth__box">
        <h1 className="auth__boxHeader">Create Account</h1>
        <form className="auth__form">
          <label htmlFor="name" className="auth__boxLabel">
            Your Name
          </label>
          <input type="text" id="name" className="auth__boxInput" />
          {/* <label htmlFor="phone" className="auth__boxLabel">
          Mobile Number
        </label>
        <div className="auth__boxMobileSection">
          <select name="" id="" className="auth__boxSelect">
            <option value="">IN +91:</option>
          </select>
          <input
            type="number"
            className="auth__boxInput"
            placeholder="Mobile number"
          />
        </div> */}

          <label htmlFor="email" className="auth__boxLabel">
            Email
          </label>
          <input type="text" className="auth__boxInput" id="email" />
          <div className="auth__boxLabel_pass">
            <label htmlFor="password" className="auth__boxLabel">
              Password
            </label>
            {/* <label htmlFor="">
            <Link to="/" className="auth__boxForgotPassword">
              Forgot Password
            </Link>
          </label> */}
          </div>
          <input
            type="password"
            className="auth__boxInput"
            id="password"
            placeholder="At least 6 characters"
            minLength="6"
          />

          <button type="submit" className="auth__boxBtn">
            Continue
          </button>
        </form>
        <p className="auth__boxTerms">
          By continuing, you agree to Amazon's{" "}
          <Link to="/signup" className="auth__boxConditions">
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link to="/signup" className="auth__boxConditions">
            Privacy Notice
          </Link>
          .
        </p>
        <div className="auth__boxHelp">
          <span className="auth__boxTerms">Already have an account?</span>
          <span style={{ marginLeft: "5px" }} className="auth__boxHelpText">
            <Link to="/signin" className="auth__boxHelpText">
              Sign in
            </Link>
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="auth__boxHelpArrow"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* <div className="auth__subLink">
        <div className="auth__divider">
          <p className="auth__subLink_text"> New to Amazon?</p>
        </div>
        <button className="auth__subLink_btn">
          <Link to="signup" className="auth__subLink_link">
            Create your Amazon account
          </Link>
        </button>
      </div>
      <div className="auth__beforeFooterDivider">
        <span className="divider"></span>
      </div> */}
      <div className="auth__footer">
        <div className="auth__footerLinks">
          <Link to="/" className="auth__link">
            Conditions of Use
          </Link>
          <Link to="/" className="auth__link">
            Privacy Notice
          </Link>
          <Link to="/" className="auth__link">
            Help
          </Link>
        </div>
        <div className="auth__footerText">
          © 1996-2020, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default SignUp;
