import { useContext } from "react";

// import context
import ThemeContext from "../context/ThemeContext";

const Dashboard = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={theme === `dark` ? `container-dark` : "container"}>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Dashboard;
