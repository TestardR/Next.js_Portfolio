import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

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
  //   const keyArray = Object.entries([key, values]);

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== 'startDate' && key !== 'endDate') {
      errors[key] = `Field ${key} is required`;
    }
  });

  const startDate = values.startDate;
  const endDate = values.endDate;

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date cannot be before start date!!!';
  }

  return errors;
};

const PortfolioForm = props => (
  <div className="portfolioForm">
    <Formik
      initialValues={INITIAL_STATE}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />

          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />

          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />

          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />

          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />

          <Field name="startDate" label="Start Date" component={PortDate} />

          <Field
            name="endDate"
            label="End Date"
            component={PortDate}
            canBeDisabled={true}
          />

          <Button
            outline
            color="success"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioForm;
