import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 5;

export const DoctorRangeProgress = ({
  min = MIN,
  max = MAX,
  valuesInit = [1, 4],
}) => {
  const [values, setValues] = useState(valuesInit);

  return (
    <div className="w-full">
      {/* Values above thumbs */}
      <div className="flex justify-between text-sm font-medium text-gray-800 mb-1 px-2">
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
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="h-2 w-full flex items-center"
          >
            <div
              ref={props.ref}
              className="h-2 w-full rounded-full"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#E5E5E5", "#253E96", "#E5E5E5"],
                  min,
                  max,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              className="w-5 h-5 bg-white border border-gray-300 rounded-full shadow focus:outline-none"
            />
          );
        }}
      />

      {/* Bottom min/max labels */}
      <div className="flex justify-between text-sm text-gray-500 mt-1 px-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default function FilterSliders() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white">
      <DoctorRangeProgress valuesInit={[1, 4]} />
    </div>
  );
}
