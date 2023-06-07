const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
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
        Positive feedback: <span>{positivePercentage}</span>%
      </li>
    </ul>
  );
};

export default Statistics;
