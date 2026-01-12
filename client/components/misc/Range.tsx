import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 20;

export const DualRange = ({ min = MIN, max = MAX, valuesInit = [1, 10] }) => {
  const [values, setValues] = useState(valuesInit);

  return (
    <div className="mb-8 w-full">
      {/* Top numbers above the thumbs */}
      <div className="flex justify-between text-sm font-medium text-gray-800 px-1 mb-1">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>

      {/* Slider */}
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
                colors: ["#E5E5E5", "#253E96", "#E5E5E5"],
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
              className="w-4 h-4 bg-white shadow-md border border-gray-300 rounded-full focus:outline-none"
            />
          );
        }}
      />

      {/* Bottom labels with KM */}
      <div className="flex justify-between text-sm text-gray-400 mt-1 px-1">
        <span>{min} KM</span>
        <span>{max} KM</span>
      </div>
    </div>
  );
};

export default function FilterSliders() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white">
      <DualRange valuesInit={[1, 10]} />
    </div>
  );
}
