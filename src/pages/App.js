import React from 'react';
import P5Init from './p5TestInit';
import Minuet from './Minuet';
import PtsQuickstart from './PtsQuickstart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {


  render () {
    return (<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/p5-init">p5 init</Link>
            </li>
            <li>
              <Link to="/minuet">miunet</Link>
            </li>
            <li>
              <Link to="/pts-quick-start">Pts Quickstart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/p5-init">
            <P5Init />
          </Route>
          
          <Route exact path="/minuet">
            <Minuet />
          </Route>
          <Route exact path="/pts-quick-start">
            <PtsQuickstart />
          </Route>
        </Switch>
      </div>
    </Router>);
  }
}

export default App;
