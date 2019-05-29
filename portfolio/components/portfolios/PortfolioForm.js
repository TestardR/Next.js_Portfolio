import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/PortInput';

const INITIAL_STATE = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
};

const validateInputs = values => {
  let errors = {};
  const keyArray = Object.keys(values);
  keyArray.forEach(key => {
    if (!values[key]) {
      errors[key] = `Field ${key} is required`;
    }
  });

  if (!values.title) {
    errors.title = 'Title is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const PortfolioForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_STATE}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
            <Field
              type="text"
              name="title"
              label="Title"
              component={PortInput}
            />
          </FormGroup>

          <FormGroup>
            <Field
              type="text"
              name="company"
              label="Company"
              component={PortInput}
            />
          </FormGroup>

          <FormGroup>
            <Field
              type="text"
              name="location"
              label="Location"
              component={PortInput}
            />
          </FormGroup>

          <FormGroup>
            <Field
              type="text"
              name="position"
              label="Position"
              component={PortInput}
            />
          </FormGroup>

          <FormGroup>
            <Field
              type="textarea"
              name="description"
              label="Description"
              component={PortInput}
            />
          </FormGroup>

          <FormGroup>
            <Field
              type="text"
              name="startDate"
              label="Start Date"
              component={PortInput}
            />
          </FormGroup>

          <FormGroup>
            <Field
              type="text"
              name="endDate"
              label="End Date"
              component={PortInput}
            />
          </FormGroup>

          <Button type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioForm;
