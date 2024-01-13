import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Loading = () => {
  const [countOfProgess, setCountOfProgess] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess((oldProgress) => {
        if (100 === oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, 499);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Loading</h4>
      Current Progress is: {parseInt(countOfProgess)} %
      <ProgressBar now={countOfProgess} />
    </div>
  );
};

export default Loading;
