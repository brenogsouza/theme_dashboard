import React from "react";
import { GlobalStyled } from "./configs/globalStyles";
import Header from "./layout/header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <GlobalStyled />
    </div>
  );
}

export default App;
