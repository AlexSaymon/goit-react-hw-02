const Options = ({ change, reset, totalRates }) => {
  return (
    <div>
      <button onClick={() => change("good")}>Good</button>
      <button onClick={() => change("neutral")}>Neutral</button>
      <button onClick={() => change("bad")}>Bad</button>
      {totalRates > 0 && <button onClick={() => reset()}>Reset</button>}
    </div>
  );
};

export default Options;
