import "./TabButton.css";
function TabButton({ children, handleClick, buttonSelected }) {
  return (
    <p className="tab-button">
      <button
        className={buttonSelected ? "active" : null}
        onClick={handleClick}
      >
        {children}
      </button>
    </p>
  );
}

export default TabButton;
