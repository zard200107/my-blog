import React, { FC, useEffect, useState } from "react";

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="text-cyan-500"
    >
      Increment
    </button>
  );
};

export default Test;
