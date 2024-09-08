const Options = ({ Change, Reset }) => {
  return (
    <div>
      <button onClick={() => Change("good")}>Good</button>
      <button onClick={() => Change("neutral")}>Neutral</button>
      <button onClick={() => Change("bad")}>Bad</button>
      {Reset && <button onClick={() => Reset()}>Reset</button>}
    </div>
  );
};

export default Options;
