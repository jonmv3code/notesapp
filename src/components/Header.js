const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1 className="header-title">Note App</h1>
      <button
        className="save"
        onClick={() => handleToggleDarkMode((previousMode) => !previousMode)}
      >
        Toggle Dark/Light Mode
      </button>
    </div>
  );
};

export default Header;
