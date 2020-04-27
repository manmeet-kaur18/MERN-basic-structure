import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Formhook from './components/formhook';
import './index.css';
import Signinhook from './components/signinhook';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Getuserslist from './components/getuserslist';
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={Formhook} />
      <Route path="/signin" component={Signinhook} />
      <Route path="/getnames" component={Getuserslist} />
    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);
