import React from "react";
import MainView from "./MainView";
import Side from "./Side";

const Core = () => {
  return (
    <div className="content">
      <Side />
      <MainView />
    </div>
  );
};

export default Core;
