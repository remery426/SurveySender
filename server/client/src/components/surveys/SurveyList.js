import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchSurveys} from "../../actions"

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys()
  }
  renderSurveys(){
    console.log(this.props.surveys)
    return this.props.surveys.reverse().map(survey=>{
        return(
        <div key ={survey._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title"> {survey.title}</span>
            <p>
                {survey.body}
            </p>
            <p className="right">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            </div>
            <div className= "card-action">
              <a>Yes: {survey.yes} </a>
              <a> No: {survey.no} </a>
            </div>
        </div>
      )
    })
  }
  render(){
    return (
      <div>
        <h2> Your surveys: </h2>
        {this.renderSurveys()}
      </div>
    )
  }
}
function mapStateToProps({surveys}){
  return {surveys}
}
export default connect(mapStateToProps,{fetchSurveys})(SurveyList);
