import "./TabButton.css";
function TabButton({ children, handleClick, buttonSelected }) {
  return (
    <ul className="tab-button">
      <button
        className={buttonSelected ? "active" : null}
        onClick={handleClick}
      >
        {children}
      </button>
    </ul>
  );
}

export default TabButton;
