import React, { Component } from 'react';
import p5 from 'p5';
import sketch from '../sketches/minuet-sketch'


/*
9,1,2,1,9,11,9,8,11,2,6,8,1,2,1,9,11,8,6,1,2,6,9,11,8,9,8,4,6,4,2,1,2,6,
9,8,9,8,4,6,2,1,11,6,2,9,1,2,1,9,11,9,8,11,6,2,8,1,2,1,8,9,8,6,1,8,4,
11,9,4,9,8,9,8,6,1,4,8,9,8,3,8,6,9,4,1,11,1,11,9,
9,5,7,9,4,
8,4,10,0,3,2,7
*/


class Minuet extends Component {
    constructor () {
        super();
        this.p5sketch = null
      }
    
    componentDidMount () {
        this.p5sketch = new p5(sketch)
    }

    render () {
        return (<></>);
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

export default Minuet;