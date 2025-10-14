import { Fragment } from "react";

export default function Tabs({ children, buttons, ButtonContainer }) {
  return (
    <Fragment>
      <ButtonContainer className="main-menu">{buttons}</ButtonContainer>
      {children}
    </Fragment>
  );
}
