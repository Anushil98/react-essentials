import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Elements from "./components/Element/elements";

function App() {
  
  return (
    <>
      <Header></Header>
      <CoreConcepts />
      <Elements></Elements>
    </>
  );
}

export default App;
