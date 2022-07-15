import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import "../index.css";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [focus, setFocus] = useState({
    focusName: false,
    focusEmail: false,
    focusPassword: false,
    focusPhoneNumber: false,
    focusConfirmPassword: false,
    focusCountry: false,
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });

  const [validate, setValidate] = useState({
    valName: false,
    valPassword: false,
    valEmail: false,
    valPhoneNumber: false,
    valConfirmPass: false,
  });

  const [country, setCountry] = useState("India");
  const [permisson, setPermission] = useState(false);

  // Regular Expressions---------------------------------

  const regName = /^[a-zA-Z ]{2,}$/;
  const regEmail =
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regPhoneNo = /^\d{10}$/;

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (
      validate.valName &&
      validate.valEmail &&
      validate.valPassword &&
      validate.valConfirmPass &&
      validate.valPhoneNumber
    )
      setPermission(false);
    else setPermission(true);
  };
  const buttonStyle = "";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        {/* ----------------------------------Name -------------------------------------*/}

        <input
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
          }}
          placeholder=" name"
          onBlur={(e) => {
            setFocus({ ...focus, focusName: true });
            if (regName.test(e.target.value))
              setValidate({ ...validate, valName: true });
            else setValidate({ ...validate, valName: false });
          }}
        />
        {!validate.valName && focus.focusName ? (
          <span>
            name should be atleast 2 characaters <br /> and should not contain
            numbers
          </span>
        ) : null}

        {/* ----------------------------------Email -------------------------------------*/}

        <input
          onChange={(e) => {
            setValues({ ...values, email: e.target.value });
          }}
          placeholder=" email"
          onBlur={(e) => {
            setFocus({ ...focus, focusEmail: true });
            if (regEmail.test(e.target.value))
              setValidate({ ...validate, valEmail: true });
            else setValidate({ ...validate, valEmail: false });
          }}
        />
        {!validate.valEmail && focus.focusEmail ? (
          <span>enter valid email</span>
        ) : null}

        {/* ----------------------------------password-------------------------------------*/}

        <input
          onChange={(e) => {
            setValues({ ...values, password: e.target.value });
          }}
          placeholder=" password"
          type="password"
          onBlur={(e) => {
            setFocus({ ...focus, focusPassword: true });
            if (regPassword.test(e.target.value))
              setValidate({ ...validate, valPassword: true });
            else setValidate({ ...validate, valPassword: false });
          }}
        />
        {!validate.valPassword && focus.focusPassword ? (
          <span>
            password should contain 8 to 16 characters
            <br />
            must contain atleast 1 special character
            <br />
            must have atleast 1 upper and lower case letter
            <br />
            and must have 1 number;
          </span>
        ) : null}

        {/* ----------------------------------Confirm Password -------------------------------------*/}

        <input
          onChange={(e) => {
            setValues({ ...values, phoneNumber: e.target.value });
          }}
          placeholder=" confirm password"
          type="password"
          onBlur={(e) => {
            setFocus({ ...focus, focusConfirmPassword: true });
            if (e.target.value === values.password)
              setValidate({ ...validate, valConfirmPass: true });
            else setValidate({ ...validate, valConfirmPass: false });
          }}
        />
        {!validate.valConfirmPass && focus.focusConfirmPassword ? (
          <span className="special">password should match</span>
        ) : null}

        {/* ----------------------------------Phone Number -------------------------------------*/}

        <input
          onChange={(e) => {
            setValues({ ...values, phoneNumber: e.target.value });
          }}
          placeholder=" phone number"
          onBlur={(e) => {
            setFocus({ ...focus, focusPhoneNumber: true });
            if (regPhoneNo.test(e.target.value))
              setValidate({ ...validate, valPhoneNumber: true });
            else setValidate({ ...validate, valPhoneNumber: false });
          }}
        />
        {!validate.valPhoneNumber && focus.focusPhoneNumber ? (
          <span className="special">enter a valid phone number</span>
        ) : null}
        {/* ----------------------------------Country-------------------------------------*/}

        <CountryDropdown
          className="c"
          value={country}
          onChange={(val) => setCountry(val)}
        />
        <br />

        {validate.valName &&
        validate.valEmail &&
        validate.valPassword &&
        validate.valConfirmPass &&
        validate.valPhoneNumber ? (
          <Link to="/show" state={{ values, country }}>
            <button className="button" role="button">
              submit
            </button>
          </Link>
        ) : (
          <Link to="/show" state={{ values, country }}>
            <button
              disabled="true"
              style={{ backgroundColor: "gray" }}
              className="button"
              role="button"
            >
              submit
            </button>
          </Link>
        )}
      </form>
    </>
  );
}

export default SignUp;
