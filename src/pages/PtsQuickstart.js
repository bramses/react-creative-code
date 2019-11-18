import React, { Component } from "react";
import { QuickStartCanvas } from 'react-pts-canvas';
import { Line, Util } from 'pts';

class PtsQuickstart extends Component {
    componentDidMount () {
    }

    render () {
        return (<QuickStartCanvas onAnimate={ (space, form, time) => {
            let subs = space.innerBound.map( 
              p => Line.subpoints( [p, space.pointer], 30 ) 
            );
            form.strokeOnly("#FDC", 2).rects( Util.zip( subs ) );
          }} />
                )
    }
}

export default PtsQuickstart;
