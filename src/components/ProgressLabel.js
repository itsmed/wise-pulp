import React, { Component } from 'react'
import ProgressLabel from 'react-progress-label'

export default class Spinner extends Component {
  render() {
      var progress = 80;
      var textStyle = {
        'fill': 'black',
        'textAnchor': 'middle'
      };
    return (
      <ProgressLabel
        progress={progress}
        startDegree={60}
        progressWidth={8}
        trackWidth={20}
        cornersWidth={4}
        size={400}
        fillColor="white"
        trackColor="red"
        progressColor="blue"
        style={{display: this.props.representatives ? 'block' : 'none'}} >

        <text x="200" y="200" style={textStyle}>{`${progress}%`}</text>

      </ProgressLabel>
    );
  }
}
