import React, { Component } from 'react';
import { Field,reduxForm,formValueSelector  } from 'redux-form';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions/action_login';
import MyModal from './Modal';

const FIELDS={
  username:{
    type:"input",
    label:"Username"
  },
  password:{
    type:"password",
    label:"Password"
  }

}
class Login extends Component {
  renderField(field){
    const { meta: {touched, error } }=field;
    const className= `form-group ${touched && error ? 'has-danger':''}`
    return(
      <div className={className}>

        <input className="form-control" type={field.type}
        placeholder= { field.label }  {...field.input }/>
        <div className="text-help help-div">
          <p className="text-danger">
            {touched ? error:''}
          </p>
        </div>
      </div>
    )
  }
  onLoginSubmit(values){
     this.props.login(values).then(()=>{
       (this.props.userData.isLoggedIn)?this.props.history.push("/planets"):
       ModalManager.open(<MyModal text="Invalid login credentials" onRequestClose={() => true}/>);
   });
  }
  render() {
    const { isLoggingIn,isLoggedIn,error,userData}=this.props.userData;
    const { validUser,userDetail }=this.props.userData;
    const { handleSubmit }= this.props;
    return (
      ////
      <div className="login-bg-img">
          <div className="container-fluid pull-xs-right login-box">
            <form onSubmit={ handleSubmit(this.onLoginSubmit.bind(this))}>
              <Field
              name="username"
              label="Username"
              type="text"
              component={ this.renderField }
              />
              <Field
              name="password"
              label="Password"
              type="password"
              component={ this.renderField }
              />
              <button type="submit" className="btn  btn-dark">
                Login
              </button>
            </form>
          </div>
      </div>
    );
  }
}
function validateLogin(values){
  const error={};
  _.each(FIELDS,(type,field)=>{
    if(!values[field]){
      error[field]=`Enter the ${field}`;
    }
  })

  return error;
}
function mapStateToProps( { userData }){
  return {
     userData
          }
}
export default reduxForm({
  validate:validateLogin,
  form:"LoginForm"
})(
  connect(mapStateToProps, { login })(Login)
)
