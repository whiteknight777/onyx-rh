import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { register } from "../contexts/authCrud";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const initialValues = {
  fullname: "",
  phone: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

function Registration(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    changepassword: Yup.string()
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      )
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      }),
    acceptTerms: Yup.bool().required(
      "You must accept the terms and conditions"
    ),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "border-danger";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "border-success";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      enableLoading();
      register(values.email, values.fullname, values.phone, values.password)
        .then(({ data: { authToken } }) => {
          props.register(authToken);
          disableLoading();
          setSubmitting(false);
        })
        .catch(() => {
          setSubmitting(false);
          setStatus(
            intl.formatMessage({
              id: "AUTH.VALIDATION.INVALID_LOGIN",
            })
          );
          disableLoading();
        });
    },
  });

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      <div className="text-left mb-5 mb-lg-10">
        <h3 className="font-size-h3">
          Try Atech free for 15 days without any commitment
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your details to create your account
        </p>
      </div>

      <form
        id="kt_login_signin_form"
        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        onSubmit={formik.handleSubmit}
      >
        {/* begin: Alert */}
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}
        {/* end: Alert */}

        {/* begin: Fullname */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Full name"
            type="text"
            className={`form-control form-control-solid h-auto py-4 px-4 ${getInputClasses(
              "fullname"
            )}`}
            name="fullname"
            {...formik.getFieldProps("fullname")}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.fullname}</div>
            </div>
          ) : null}
        </div>
        {/* end: Fullname */}

        {/* begin: Phone */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Phone"
            type="tel"
            className={`form-control form-control-solid h-auto py-4 px-4 ${getInputClasses(
              "phone"
            )}`}
            name="phone"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.phone}</div>
            </div>
          ) : null}
        </div>
        {/* end: Email */}

        {/* begin: Email */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-4 px-4 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        {/* end: Email */}

        {/* begin: Password */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-4 px-4 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        {/* end: Password */}

        {/* begin: Confirm Password */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Confirm Password"
            type="password"
            className={`form-control form-control-solid h-auto py-4 px-4 ${getInputClasses(
              "changepassword"
            )}`}
            name="changepassword"
            {...formik.getFieldProps("changepassword")}
          />
          {formik.touched.changepassword && formik.errors.changepassword ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                {formik.errors.changepassword}
              </div>
            </div>
          ) : null}
        </div>
        {/* end: Confirm Password */}

        {/* begin: Terms and Conditions */}
        <div className="form-group">
          <label className="checkbox flex-row-reverse justify-content-end">
            <input
              type="checkbox"
              name="acceptTerms"
              className="m-1"
              {...formik.getFieldProps("acceptTerms")}
            />
            <div className="ml-3">
            Yes, receive newsletters and offers.
            <br/>
            <span className="text-muted text-xs">By continuing you accept these {' '}</span>
            <Link
              to="/terms"
              target="_blank"
              className="text-xs"
              rel="noopener noreferrer"
            >
            terms and conditions.
            </Link>
            </div>
            <span />
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          ) : null}
        </div>
        {/* end: Terms and Conditions */}
        <div className="form-group d-flex flex-wrap flex-center">
          <button
            type="submit"
            disabled={
              formik.isSubmitting ||
              !formik.isValid ||
              !formik.values.acceptTerms
            }
            className="btn btn-primary btn-block font-weight-bold px-9 py-4 my-3"
          >
            <span>Submit</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>

          
          <Link
            to="/auth/login"
            className="text-dark-50 text-hover-primary my-3 mr-2 text-underline"
            id="kt_login_forgot"
          >
            Already have an account ? Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default injectIntl(Registration);
