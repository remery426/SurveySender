import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview'
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';
import{connect} from 'react-redux'

class SurveyNew extends Component {
  state = {showReview:false}
  componentWillUnmount(){
    this.props.clearDrafts()
  }
  onSurveySubmit(values,history){

    if(values.draft == true){
    return(this.props.submitSurvey(values,history))
    }
    else{
      this.setState({showReview: true})
    }
  }
  renderContent(){
    if(this.state.showReview){
      return <SurveyReview
        onCancel ={() => this.setState({showReview: false})}
      />
    }
    return (
      <SurveyForm initialValues={{ body: this.props.content.body, title: this.props.content.title, subject:this.props.content.subject, recipients: this.props.content.recipients }}
      onSurveySubmit = {(values, drafts) => this.onSurveySubmit(values,drafts)}
    />
  )
    }


  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
function mapStateToProps({content}){
  return {content}
}
SurveyNew = connect(mapStateToProps, actions)(SurveyNew);
SurveyNew = reduxForm({
  form: 'surveyForm'
}) (withRouter(SurveyNew));
export default SurveyNew;
