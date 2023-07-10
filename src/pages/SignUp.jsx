import React, { useState } from "react";
import "./styles/SignUp.css";
import {
  Facebook,
  Google,
  Show,
} from "../assets/main-display-icons";
import { ContinueWith, Button, CustomInput, CustomSelect, CustomCheckBox, CustomAgeInput } from "../components";
import { Logo } from "../assets/sidebar-icons";
import { Link } from "react-router-dom";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, ErrorMessage, useFormikContext } from "formik";
import { signUpSchema } from "../custom/schemas/SignUpSchema";

function SignUp() {
  async function createANewUser(values) {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        userName: values.username,
        email: values.email,
        gender: values.userGender,
        dateOfBirth: `${values.dayOfBirth}-${values.monthOfBirth}-${values.yearOfBirth}`,
        marketingMessages: values.marketingMessages,
        shareRegistrationData: values.shareRegistrationData,
        timeAcctCreate: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        dayOfBirth: "",
        yearOfBirth: "",
        monthOfBirth: "",
        userGender: "",
        marketingMessages: false,
        shareRegistrationData: false,
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        createANewUser(values)
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1500);
      }}
    >
      {({isSubmitting}) => (
        <div className="sign-up-main-container">
          <div className="sign-up-card-main">
            <div className="sign-up-logo">
              <Link to="/">
                <div className="login-inner-logo-text-contianer">
                  <div className="login-logo-contianer">
                    <Logo
                      style={{ width: "30px", height: "30px", fill: "#fff" }}
                    />
                  </div>
                  <h1>Mytones</h1>
                </div>
              </Link>
            </div>
            <div className="sign-up-with-container">
              <h1>Sign up for free to start listening.</h1>
              <div className="inner-sign-up-btn">
                <div className="continue-with-login-method">
                  <Facebook className="login-with-icons" />
                  <p>Sign up with Facebook</p>
                </div>
                <div className="continue-with-login-method">
                  <Google className="login-with-icons" />
                  <p>Sign up with Google</p>
                </div>
              </div>
            </div>
            <div className="sign-up-form">
              <Form className="form-sign-up">
                <div className="inputs-for-sign-up">
                  <CustomInput
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Enter your email adress"
                  />
                </div>
                <div className="inputs-for-sign-up password-show-hide">
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter a Password"
                  />
                  <Show className="show-hide-sign-up" />
                </div>
                <div className="inputs-for-sign-up password-show-hide">
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your Password"
                  />
                  <Show className="show-hide-sign-up" />
                </div>
                <div className="inputs-for-sign-up">
                  <CustomInput
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter a Username"
                  />
                </div>
                <div className="date-of-birth">
                  <CustomAgeInput
                    label="Day"
                    name="dayOfBirth"
                    type="text"
                    placeholder="DD"
                  />
                  <div>
                    <CustomSelect
                      label="Month"
                      name="monthOfBirth"
                      placeholder="Month"
                    >
                      <option value="">Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </CustomSelect>
                  </div>
                  <CustomAgeInput
                    label="Year"
                    name="yearOfBirth"
                    type="text"
                    placeholder="YYYY"
                    yearStyle="year-align"
                  />
                </div>
                <div className="gender-section">
                  <p>What's your gender?</p>
                  <div className="checkbox-gender-section">
                    <CustomCheckBox
                      type="radio"
                      name="userGender"
                      label="Male"
                      value="male"
                    />
                    <CustomCheckBox
                      type="radio"
                      name="userGender"
                      label="Female"
                      value="female"
                    />
                    <CustomCheckBox
                      type="radio"
                      name="userGender"
                      label="Pefer not to say"
                      value="prefer-not-to-say"
                    />
                  </div>
                  <ErrorMessage name="userGender" component="div" />
                </div>
                <div className="agree-to-terms-and-conditions">
                  <div>
                    <CustomCheckBox
                      type="checkbox"
                      name="marketingMessages"
                      label=" I would prefer not to receive marketing messages from
                      Mytones"
                    />
                  </div>
                  <div>
                    <CustomCheckBox
                      type="checkbox"
                      name="shareRegistrationData"
                      label="Share my registration data with Mytone's content providers
                      for marketing purposes."
                    />
                  </div>
                  <p>
                    By clicking on sign-up, you agree to the{" "}
                    <span className="sign-up-links">
                      Mytones Terms and Conditions
                    </span>{" "}
                    and <span className="sign-up-links">Privacy Policy</span>.
                  </p>
                </div>
                <div className="btn-container-sign-up">
                  <Button
                    text="Sign Up"
                    style="sign-up-btn"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            </div>
            <p className="login-redirect">
              Have an account?{" "}
              <Link to="/login">
                <span className="sign-up-links">Log in</span>
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
