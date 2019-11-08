import React from 'react';
import p5 from 'p5';
import sketch from '../sketches/p5-init-test-sketch';



class p5Init extends React.Component {
  
  constructor () {
    super();
    this.p5sketch = null
  }

  componentDidMount () {
    this.p5sketch = new p5(sketch)
  }

  render () {
    return null;
  }

  // remove canvas from dom
  componentWillUnmount () {
    this.p5sketch.remove()
    let canvases = document.querySelectorAll('canvas')
    canvases.forEach(canvas => {
      canvas.parentNode.removeChild(canvas)
    })
  }
}

export default p5Init;
