import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'
import * as actions from '../actions'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
import DraftList from './surveys/DraftList'
import Landing from './Landing'


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div >
        <BrowserRouter>
          <div className ='container'>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/drafts" component={DraftList} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
