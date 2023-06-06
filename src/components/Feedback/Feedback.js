import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCliclGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleCliclNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleCliclBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFB = this.countPositiveFeedbackPercentage();

    return (
      <section>
        <h2 className="titleHead">Please leave feedback</h2>
        <button className="btnFeedback" onClick={this.handleCliclGood}>
          Good
        </button>
        <button className="btnFeedback" onClick={this.handleCliclNeutral}>
          Neutral
        </button>
        <button className="btnFeedback" onClick={this.handleCliclBad}>
          Bad
        </button>
        <div className="statistic">
          <h3 className="statisticTitle">Statistics</h3>
          <ul className="statisticList">
            <li className="statisticItem">
              Good: <span>{good}</span>
            </li>
            <li className="statisticItem">
              Neutral: <span>{neutral}</span>
            </li>
            <li className="statisticItem">
              Bad: <span>{bad}</span>
            </li>
            <li className="statisticItem">
              Total: <span>{total}</span>
            </li>
            <li className="statisticItem">
              Positive feedback: <span>{positiveFB}</span>%
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Feedback;
