import React from 'react';
import P5Init from './p5TestInit'
import  TedTalk from './TedTalk';
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
              <Link to="/ted-talks">ted talk</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/p5-init">
            <P5Init />
          </Route>
          <Route path="/ted-talks">
            <TedTalk />
          </Route>
        </Switch>
      </div>
    </Router>);
  }
}

export default App;
