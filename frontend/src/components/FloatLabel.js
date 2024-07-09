import React, { useState } from "react";

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass =
    focus || (value && value.length !== 0)
      ? " text-xs font-normal absolute pointer-events-none transition-transform ease-linear duration-200 left-8 top-6 bg-[#fff] bg-opacity-80 w-auto px-2 text-xs"
      : "text-xs font-normal absolute pointer-events-none px-2 left-8 top-9.5 transition-transform ease-linear duration-200";

  return (
    <div
      className="relative mb-3 w-full h-full flex flex-col items-center justify-center "
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
