const Feedback = ({ Rates, TotalRates, PositiveRates }) => {
  return (
    <div>
      <ul>
        <li>Good: {Rates.good}</li>
        <li>Neutral: {Rates.neutral}</li>
        <li>Bad: {Rates.bad}</li>
        <li>Total: {TotalRates}</li>
        <li>Positive: {PositiveRates}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
