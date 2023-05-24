import React, { useState } from "react";

// import context
import ThemeContext from "./context/ThemeContext";

// import Dashboard
import Dashboard from "./components/Dashboard";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
};

export default App;
