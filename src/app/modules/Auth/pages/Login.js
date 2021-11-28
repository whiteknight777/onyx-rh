import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { injectIntl } from "react-intl";
import { UserContext, ActionTypes } from '../contexts/userProvider';
import { login } from "../contexts/authCrud";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

function Login(props) {
  const { intl } = props;
  const { dispatch } = useContext(UserContext);
  const _isMounted = useRef(true);
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
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
  });

  useEffect(() => {
    
    return () => { // ComponentWillUnmount in Class Component
        _isMounted.current = false;
    }
    // eslint-disable-next-line
  }, []);

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
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
        enableLoading();
        login(values.email, values.password)
          .then((res) => {
            disableLoading();
            if(_isMounted.current){
              dispatch({type: ActionTypes.login});
            }
          })
          .catch((e) => {
            if(_isMounted.current){
              if(e.response !== undefined){
                const {status} = e.response
                switch (status) {
                  case 401:
                    // Unauthorized
                    setStatus(
                      "Email/Password not correct"
                    );
                    break;
                  case 500:
                    // Unauthorized
                    setStatus(
                      "Oups.. there is an error"
                    );
                    break;
                  default:
                    break;
                }
              }
            }
          })
          .finally(() => {
            if(_isMounted.current){
              disableLoading();
              setSubmitting(false);
            }
          });
    },
  });

  return (
    <>
     {/*begin::Content header*/}
     <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
        <span className="font-weight-bold text-dark-50">
          Don't have an account yet?
        </span>
        <Link
          to="/auth/registration"
          className="font-weight-bold ml-2"
          id="kt_login_signup"
        >
          Sign Up!
        </Link>
      </div>
    {/*end::Content header*/}
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-left mb-5 mb-lg-10">
        <h3 className="font-size-h1">
        Login Account
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your username and password
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}

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
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2 text-underline"
            id="kt_login_forgot"
          >
            Forgot password ?
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary btn-block font-weight-bold px-9 py-4 my-3`}
          >
            <span>Log In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
    </>
  );
}

export default injectIntl(Login);
