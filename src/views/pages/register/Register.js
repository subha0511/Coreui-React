import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Formik} from "formik";
import * as Yup from "yup";


const Register = () => {

  const mobileRegex = /^[6-9]\d{9}$/;

  const validate = Yup.object({
    name: Yup.string()
      .max(20, "Name must be 20 Charcters or Less")
      .required("Name is Required"),
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    mobile: Yup.string()
      .matches(mobileRegex, "Phone number is not valid")
      .required("Mobile number is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password Confirmation is Required"),
  });

  const handleSignUp = (values, { resetForm }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("API_END_POINT", requestOptions)
      .then((response) => response.json())
      .then(console.log);
    resetForm();
  };

  return (

    <Formik
      initialValues={{
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={handleSignUp}
    >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
    }) => 
    (<div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name && touched.name && "is-invalid"
                        }`}
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        as={CInput}
                      />
                      {errors.name && touched.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}                   
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email && touched.email && "is-invalid"
                      }`}
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>91</CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      type="tel"
                      className={`form-control ${
                        errors.mobile && touched.mobile && "is-invalid"
                      }`}
                      name="mobile"
                      id="mobile"
                      placeholder="Enter Mobile Number"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobile && touched.mobile && (
                      <div className="invalid-feedback">{errors.mobile}</div>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password && touched.password && "is-invalid"
                      }`}
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      autoComplete="off"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.confirmPassword &&
                        touched.confirmPassword &&
                        "is-invalid"
                      }`}
                      name="confirmPassword"
                      id="confirmPassword"
                      autoComplete="off"
                      placeholder="Re-enter password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword}</div>
                    )}
                  </CInputGroup>
                  <CButton color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              {/* <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter> */}
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>)}
    </Formik>
  )
}

export default Register
