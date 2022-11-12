import React from "react";
import { useFormInputValidation } from "react-form-input-validation";
import "../css/ValidationForm.css";
import { useNavigate } from "react-router-dom";

const ValidationForm = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      full_name: "",
      email_address: "",
      confirm_email_address: "",
      password: "",
      confirm_password: "",
      phone_number: "",
      check_box: "",
    },
    {
      full_name: "required",
      email_address: "required|email",
      confirm_email_address: "required|email",
      password: "required",
      confirm_password: "required",
      phone_number: "required|numeric|digits_between:10,12",
      //   check_box: "",
    }
  );

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      //   console.log(fields);
      // Perform api call here
      localStorage.setItem("signup", JSON.stringify(fields));
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="validation_form">
      <form
        className="myForm"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        {/* Full Name */}
        <p>
          <label>
            * Full Name
            <br />
            <input
              type="text"
              name="full_name"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.full_name}
            />
          </label>
          <br />

          <label className="error">
            {errors.full_name ? errors.full_name : ""}
          </label>
        </p>
        {/* Email Address */}
        <p>
          <label>
            * Email address
            <br />
            <input
              type="email"
              name="email_address"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.email_address}
            />
          </label>
          <br />

          <label className="error">
            {errors.email_address ? errors.email_address : ""}
          </label>
        </p>

        {/* Confirm email address */}
        <p>
          <label>
            * Confirm Email address
            <br />
            <input
              type="email"
              name="confirm_email_address"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.confirm_email_address}
            />
          </label>
          <br />

          <label className="error">
            {errors.confirm_email_address ? errors.confirm_email_address : ""}
          </label>
        </p>

        {/* Password */}
        <p>
          <label>
            * Password
            <br />
            <input
              type="password"
              name="password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password}
            />
          </label>
          <br />
          <label className="error">
            {errors.password ? errors.password : ""}
          </label>
        </p>

        {/* Confirm password */}
        <p>
          <label>
            * Confirm Password
            <br />
            <input
              type="password"
              name="confirm_password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.confirm_password}
            />
          </label>
          <br />
          <label className="error">
            {errors.confirm_password ? errors.confirm_password : ""}
          </label>
        </p>

        {/* Phone Number */}
        <p>
          <label>
            * Cell Phone Number
            <br />
            <input
              type="tel"
              name="phone_number"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.phone_number}
            />
          </label>
          <br />

          <label className="error">
            {errors.phone_number ? errors.phone_number : ""}
          </label>
        </p>

        {/* Checkbox */}
        <p>
          <span
            style={{
              fontSize: "14px",
              fontWeight: " 700",
              color: "#333333",
            }}
          >
            Loyalty Reward program
          </span>
          <label
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <br />
            <input
              type="checkbox"
              name="check_box"
              //   onBlur={form.handleBlurEvent}
              //   onChange={form.handleChangeEvent}
              value={fields.check_box}
              style={{
                width: "25px",
                height: "25px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "#333333",
                fontWeight: "600",
                marginLeft: "15px",
              }}
            >
              Include me in the Dermstore Rewards program Read our terms of use.
            </span>
          </label>
          <br />
          <label className="error">
            {errors.check_box ? errors.check_box : ""}
          </label>
        </p>

        <p>
          <button className="signup_continue" type="submit">
            CONTINUE
          </button>
        </p>
      </form>
    </div>
  );
};

export default ValidationForm;
