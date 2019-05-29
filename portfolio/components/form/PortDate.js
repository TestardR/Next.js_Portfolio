import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FormGroup, Label, Button } from 'reactstrap';

import 'react-datepicker/dist/react-datepicker.css';

class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: moment(),
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange(date) {
    this.setState({
      dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  }

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden
    });

    this.setFieldValueAndTouched(date, true);
  }

  render() {
    const {
      label,
      form: { touched, errors },
      field,
      canBeDisabled
    } = this.props;
    const { isHidden, dateValue } = this.state;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div>
          {!isHidden && (
            <DatePicker
              className="input-group"
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          )}
        </div>
        {canBeDisabled && !isHidden && (
          <Button onClick={() => this.toggleDate()}>In progress</Button>
        )}

        {canBeDisabled && isHidden && (
          <React.Fragment>
            <span>In Progress</span>
            <Button onClick={() => this.toggleDate()}>Set End Date</Button>
          </React.Fragment>
        )}

        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </FormGroup>
    );
  }
}

export default PortDate;
