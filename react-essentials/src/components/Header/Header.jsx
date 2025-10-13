import "./Header.css";

const randomStrings = ["Fundamentals", "Essentials", "Basics", "Core"];
function geRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const desc = randomStrings[geRandomInt(3)];
  return (
    <header>
      <h1> React {desc}! 😀</h1>
    </header>
  );
}

export default Header;
