import React, { Component, Fragment } from 'react';
import Feedback from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Fragment>
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
      </Fragment>
    );
  }
}
