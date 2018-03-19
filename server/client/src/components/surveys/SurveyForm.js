import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux'
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields'
import {withRouter} from 'react-router-dom';
const fieldHelper = ['title','subject','body','recipients']
class SurveyForm extends Component {

  renderFields(){
    return _.map(FIELDS, ({label , name, index})=>{
      return <Field key ={`${name}.fieldHelper[index]`} component={SurveyField} type="text" label={label} name={name} />
    });
  }

  render() {
    return(
    <div>
    <form initialValues={{body: "poop"}} onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <Link to="/surveys/drafts" style={{marginLeft: '15%'}} className="blue btn-flat white-text">
            My Drafts
            <i className="material-icons right">drafts</i>
          </Link>
          <button onClick={this.props.handleSubmit((values, history) =>this.props.onSurveySubmit({
            ...values,
            draft: true
          },this.props.history))} className="yellow darken-3 btn-flat white-text" style={{marginLeft: '15%'}}>
            Save as Draft <i className="material-icons right">save</i>
          </button>
          <button onClick={this.props.handleSubmit(values =>this.props.onSurveySubmit({
            ...values,
            draft: false
          }))} className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
    </div>
    );
  }
}
function validate(values){
  const errors ={};
    if(values.draft == true){
      return errors
    }
    errors.emails = validateEmails(values.recipients || '')
  _.each(FIELDS,({name})=>{
    if(!values[name]){
      errors[name] = 'Required Field'
    }
  });


  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(withRouter(SurveyForm));
