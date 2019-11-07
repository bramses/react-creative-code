import React from 'react';
import p5 from 'p5';
import sketch from './sketch';
// import * as palette from 'nice-color-palettes';

class App extends React.Component {
  componentDidMount () {
    new p5(sketch)
  }

  render () {
    return null;
  }
}

export default App;
