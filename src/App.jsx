import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [rateData, setRateData] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("rateData"));

    return (
      savedData ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    window.localStorage.setItem("rateData", JSON.stringify(rateData));
  }, [rateData]);

  const { good, neutral, bad } = rateData;

  const handleChangeRateData = (variant) => {
    setRateData((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  };

  const handleResetData = () => {
    setRateData({ good: 0, neutral: 0, bad: 0 });
  };

  const totalRates = good + neutral + bad;

  const positiveRates = Math.round((good / totalRates) * 100);

  return (
    <>
      <Description />
      <Options
        change={handleChangeRateData}
        totalRates={totalRates}
        reset={handleResetData}
      />
      {totalRates > 0 ? (
        <Feedback
          rates={rateData}
          totalRates={totalRates}
          positiveRates={positiveRates}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
