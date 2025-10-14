import { Fragment, useState } from "react";
import { menuDescriptions } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import "./Elements.css";
import Tabs from "../Tabs/Tabs";

export default function Elements() {
  const [selectedMenu, setSelectedMenu] = useState("Component");
  const handleClick = (buttonName) => {
    setSelectedMenu(buttonName);
  };
  return (
    <Fragment>
      <Section>
        <Tabs
          ButtonContainer={Section}
          buttons={
            <>
              {Object.keys(menuDescriptions).map((x) => (
                <TabButton
                  handleClick={() => handleClick(x)}
                  key={x}
                  buttonSelected={selectedMenu === x}
                >
                  {x}
                </TabButton>
              ))}
            </>
          }
        >
          <Section id="menu-description-wrapper" title={null}>
            <p id="menu-description">
              {menuDescriptions[selectedMenu].description}
            </p>
          </Section>
        </Tabs>
      </Section>
    </Fragment>
  );
}
