import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (

      <div>
      <form className="login-form" onSubmit={handleSubmit(this.onSubmit)}>
        <p className="welcome">Welcome, Trevor.</p>
        <fieldset className="fieldset">
          <Field className="loginInput"
            name="email"
            type="text"
            component="input"
            autoComplete="none"
            placeholder="Email"
          />
        </fieldset>
        <fieldset className="fieldset">
          <Field className="loginInput"
            name="password"
            type="password"
            component="input"
            autoComplete="none"
            placeholder="Password"
          />
        </fieldset>
        <button className="btn btn-2">Let's Go</button>
        <div className="errorMessages">{this.props.errorMessage}</div>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
