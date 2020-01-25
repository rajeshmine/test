import React, { Component } from 'react';
import { render } from 'react-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Call from './components/Call/Call';
import SideNavBar from './components/SideNav/SideNav';
import Insights from './components/Insights/Insights';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }



  render() {

    return (
      <div>
        <Switch>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <SideNavBar history={history}/>


              <main style={{ marginLeft: '250px', padding: "10px" }} >
                <Route path="/" exact component={props => <Call />} />
                <Route path="/call" component={props => <Call />} />
                <Route path="/insights" component={props => <Insights />} />

              </main>
            </React.Fragment>
          )}
          />
        </Switch>


      </div >
    );
  }
}

render(<Router>
  <App />
</Router>, document.getElementById('root'));
