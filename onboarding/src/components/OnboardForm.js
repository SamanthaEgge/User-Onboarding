import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import './OnboardForm.css';

function OnboardForm() {
  return (
    <div className="onboarding-container">
      <Form className="onboard-form">
        <h2>Add Employee</h2>
        <Field
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          // className={errors.name ? 'invalid' : ''}
        />
        <Field autoComplete="off" type="email" id="email" name="email" />
        <Field
          autoComplete="off"
          type="password"
          id="password"
          name="password"
        />
        <button
          className="submit-button"
          // disabled={isSubmitting}
        >
          {' '}
          Submit &rarr;{' '}
        </button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      name: '',
      email: '',
      password: '',
      termsOfService: false
    };
  },
  handleSubmit: (values, formikBag) => {
    formikBag.resetForm();
    console.log('we hit dat submission');
    const url = 'https://reqres.in/api/users';
    // formikBag.setSubmitting(true);
    axios.post(url, values).then((response) => {
      console.log(response.data);
      window.alert(
        response.data.name +
          'successfully submitted with' +
          response.data.email +
          'email'
      );
      // formikBag.setSubmitting(false);
    });
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required('Name is required'),
    email: Yup.string()
      .required('Email address is required.')
      .email(),
    password: Yup.string()
      .min(8)
      .max(26)
  })
})(OnboardForm);
