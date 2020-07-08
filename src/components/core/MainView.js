import React from "react";
import Gallery from "./Gallery";
import SearchBar from "./SearchBar";

const MainView = () => {
  return (
    <main className="main-view">
      <Gallery />
      <SearchBar />
    </main>
  );
};

export default MainView;
