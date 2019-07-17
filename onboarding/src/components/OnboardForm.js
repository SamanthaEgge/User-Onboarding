import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import './OnboardForm.css';

function OnboardForm() {
  return (
    <div className="onboarding-container">
      <h1>Form</h1>
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
  handleSubmit: (values, formikBag) => {},
  validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(
            limit: 3
        )
        .required(),
    email: Yup.string()
        .required('Name address is required.')
        .email()
  })
})(OnboardForm);
