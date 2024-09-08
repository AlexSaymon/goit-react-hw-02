const Feedback = ({ rates, totalRates, positiveRates }) => {
  return (
    <div>
      <ul>
        <li>Good: {rates.good}</li>
        <li>Neutral: {rates.neutral}</li>
        <li>Bad: {rates.bad}</li>
        <li>Total: {totalRates}</li>
        <li>Positive: {positiveRates}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
