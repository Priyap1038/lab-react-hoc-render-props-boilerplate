import React, { useState } from "react";

const WrapperHoc = (WrapperFunction) => {
  function newWrapper() {
    const [count, setcount] = useState(0);

    let handleCount = () => {
      setcount(count + 1);
    };

    return (
    <WrapperFunction count={count} handleCount={handleCount} />
);
  }

  return newWrapper;
};

export default WrapperHoc;
