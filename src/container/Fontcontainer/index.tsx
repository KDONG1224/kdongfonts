import { StoreState } from "modules";
import React from "react";
import { useSelector } from "react-redux";

export const Fontcontainer = () => {
  const data = useSelector((state: StoreState) => state.fontState.font);
  console.log(data);
  return (
    <div>
      <div>Sample Container</div>
    </div>
  );
};
