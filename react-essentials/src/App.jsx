import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { coreconcepts, menuDescriptions } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Component");
  const handleClick = (buttonName) => {
    setSelectedMenu(buttonName);
  };
  return (
    <>
      <Header></Header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <section id="core-concepts">
        {coreconcepts.map((x) => (
          <CoreConcepts {...x}></CoreConcepts>
        ))}
      </section>

      <menu className="main-menu">
        {Object.keys(menuDescriptions).map((x) => (
          <TabButton
            handleClick={() => handleClick(x)}
            key={x}
            buttonSelected={selectedMenu === x}
          >
            {x}
          </TabButton>
        ))}
      </menu>
      <section>
        <div>{menuDescriptions[selectedMenu].description}</div>
      </section>
    </>
  );
}

export default App;
