import React, { Component } from "react";
import * as d3 from 'd3';
import '../styles/TedTalk.css';

class TedTalk extends Component {

    componentDidMount () {
        let svg = d3.select('#dataviz_area')
        svg.append('circle').attr('cx', 200).attr('cy', 200).attr('r', 40).style('fill', 'blue')
        svg.append('circle').attr('cx', 230).attr('cy', 200).attr('r', 40).style('fill', 'red')
    }

    render () {
        return (
            <div>
                <svg id="dataviz_area" className="isolate" width="700" height="600">
  	                <g></g>
                </svg>
            </div>
            
        );
    }
}

export default TedTalk;