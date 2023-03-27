/* -----------------------imports -------------*/

import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import useForm from "../../forms/useForm.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";
import {
  SIGNUP_ADDRESS_CITY_FIELD,
  SIGNUP_ADDRESS_CITY_ERROR,
  SIGNUP_ADDRESS_COUNTRY_FIELD,
  SIGNUP_ADDRESS_COUNTRY_ERROR,
  SIGNUP_ADDRESS_HOUSENUMBER_FIELD,
  SIGNUP_ADDRESS_HOUSENUMBER_ERROR,
  SIGNUP_ADDRESS_STATE_FIELD,
  SIGNUP_ADDRESS_STATE_ERROR,
  SIGNUP_ADDRESS_STREET_FIELD,
  SIGNUP_ADDRESS_STREET_ERROR,
  SIGNUP_ADDRESS_ZIP_FIELD,
  SIGNUP_ADDRESS_ZIP_ERROR,
  SIGNUP_CANCEL_BTN,
  SIGNUP_EMAIL_FIELD,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_FIRST_NAME_FIELD,
  SIGNUP_FIRST_NAME_ERROR,
  SIGNUP_LAST_NAME_FIELD,
  SIGNUP_LAST_NAME_ERROR,
  SIGNUP_PASSWORD_FIELD,
  SIGNUP_PASSWORD_ERROR,
  SIGNUP_PHONE_FIELD,
  SIGNUP_PHONE_ERROR,
  SIGNUP_SUBMIT_BTN,
} from "../../services/domService.js";
import User from "../models/User.js";

//-------------------------register- signup----------------------------------
export const signup = () => {
  const INITIAL_SIGNUP_FORM = {
    first: "",
    last: "",
    state: "",
    country: "",
    city: "",
    street: "",
    housenumber: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
  };

  const SIGNUP_SCHEMA = {
    first: "required",
    last: "required",
    state: "[min,4]",
    country: "[min,4]",
    city: "[min,3]",
    street: "[min,3]",
    housenumber: "required",
    zip: "number",
    phone: "required",
    email: "email",
    password: "password",
  };

  /* array of inputs */
  const SIGNUP_INPUT_ARRAY = [
    SIGNUP_ADDRESS_CITY_FIELD,
    SIGNUP_ADDRESS_COUNTRY_FIELD,
    SIGNUP_ADDRESS_HOUSENUMBER_FIELD,
    SIGNUP_ADDRESS_STATE_FIELD,
    SIGNUP_ADDRESS_STREET_FIELD,
    SIGNUP_ADDRESS_ZIP_FIELD,
    SIGNUP_EMAIL_FIELD,
    SIGNUP_FIRST_NAME_FIELD,
    SIGNUP_LAST_NAME_FIELD,
    SIGNUP_PASSWORD_FIELD,
    SIGNUP_PHONE_FIELD,
  ];

  /* array of errors */
  const SIGNUP_ERROR_ARRAY = [
    SIGNUP_ADDRESS_CITY_ERROR,
    SIGNUP_ADDRESS_COUNTRY_ERROR,
    SIGNUP_ADDRESS_HOUSENUMBER_ERROR,
    SIGNUP_ADDRESS_STATE_ERROR,
    SIGNUP_ADDRESS_STREET_ERROR,
    SIGNUP_ADDRESS_ZIP_ERROR,
    SIGNUP_EMAIL_ERROR,
    SIGNUP_FIRST_NAME_ERROR,
    SIGNUP_LAST_NAME_ERROR,
    SIGNUP_PASSWORD_ERROR,
    SIGNUP_PHONE_ERROR,
  ];

  /* handlesubmit */
  const handleSignupSubmit = (data) => {
    console.log(data);

    try {
      let user = {
        name: {
          first: data.first,
          last: data.last,
        },
        address: {
          state: data.state,
          country: data.country,
          city: data.city,
          street: data.street,
          housenumber: data.housenumber,
          zip: data.zip,
        },
        phone: data.phone,
        email: data.email,
        password: data.password,
      };

      user = new User(user, users);

      onReset(
        SIGNUP_INPUT_ARRAY,
        SIGNUP_ERROR_ARRAY,
        SIGNUP_SUBMIT_BTN,
        signupForm.handleReset
      );
      users.push(user);

      onChangePage(PAGES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  /* useForm */
  const signupForm = useForm(
    INITIAL_SIGNUP_FORM,
    SIGNUP_SCHEMA,
    handleSignupSubmit
  );

  SIGNUP_ADDRESS_CITY_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGNUP_ADDRESS_CITY_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    )
  );

  SIGNUP_ADDRESS_COUNTRY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ADDRESS_COUNTRY_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_ADDRESS_HOUSENUMBER_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ADDRESS_HOUSENUMBER_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_ADDRESS_STATE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ADDRESS_STATE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_ADDRESS_STREET_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ADDRESS_STREET_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_ADDRESS_ZIP_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ADDRESS_ZIP_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_EMAIL_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_FIRST_NAME_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_FIRST_NAME_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_LAST_NAME_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_LAST_NAME_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_PASSWORD_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_PHONE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_PHONE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleInputChange,
      signupForm.handleDisableSubmitBtn
    );
  });

  SIGNUP_SUBMIT_BTN.addEventListener("click", signupForm.onSubmit);
  SIGNUP_CANCEL_BTN.addEventListener("click", () =>
    onReset(
      SIGNUP_INPUT_ARRAY,
      SIGNUP_ERROR_ARRAY,
      SIGNUP_SUBMIT_BTN,
      signupForm.handleReset
    )
  );
};
