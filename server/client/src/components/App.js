import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'

import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
const Landing= () => <h2>Landing</h2>


class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null)(App);
