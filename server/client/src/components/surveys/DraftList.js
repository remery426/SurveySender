import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from "../../actions"
import SurveyNew from './SurveyNew';
import {withRouter} from 'react-router-dom';
class DraftList extends Component {
  state = {showDrafts:true, body: '', subject: '', recipients: '',title:''}
  componentDidMount(){
    this.props.fetchDrafts()
  }
  stringRecip(recipients){
    var string_val = ''
    for(var i = 0; i <recipients.length;i++){
      for(var j=0; j< recipients[i].email.length; j++){
        string_val += recipients[i].email[j]
      }
    }
    return string_val
  }
  handleClick(draft){
    console.log(this.props.history)
    draft.recipients = this.stringRecip(draft.recipients)
    this.props.setContent(draft,this.props.history)
  }
  renderSurveys(){
    return this.props.drafts.reverse().map(draft=>{
        return(
        <div onClick={() => this.handleClick(draft)} key ={draft._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title"> {draft.title}</span>
            <p>
              Email Body: {draft.body}
            </p>
            </div>
        </div>
      )
    })
  }
  render(){
    return (
      <div>
        {this.renderSurveys()}
      </div>
    )
  }
}
function mapStateToProps({drafts}){
  return {drafts}
}
export default connect(mapStateToProps,actions)(withRouter(DraftList));
