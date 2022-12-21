import React from "react";

type Props = {
  scaleValue?: any;
  careType?: string;
};

const CareScale = ({ careType, scaleValue }: Props) => {
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
