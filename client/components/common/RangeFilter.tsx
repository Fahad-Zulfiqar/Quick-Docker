import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 15;

export const DualRangeSlider = ({
  min = MIN,
  max = MAX,
  valuesInit = [1, 10],
}) => {
  const [values, setValues] = useState(valuesInit);

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-500 mb-2 px-1">
        <span>{min}</span>
        <span>{values[0]}</span>
        <span>{values[1]}</span>
        <span>{max > 15 ? `${max}+` : max}</span>
      </div>
      <Range
        values={values}
        step={STEP}
        min={min}
        max={max}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 rounded-full w-full"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#F2F2F2", "#253E96", "#F2F2F2"],
                min,
                max,
              }),
              ...props.style,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              className="w-5 h-5 bg-white shadow-md border border-gray-300 rounded-full"
            />
          );
        }}
      />
    </div>
  );
};

export default function FilterSliders() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white">
      <DualRangeSlider valuesInit={[1, 10]} />
      <DualRangeSlider min={0} max={5} valuesInit={[1, 4]} />
    </div>
  );
}
