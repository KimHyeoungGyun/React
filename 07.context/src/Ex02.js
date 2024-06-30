import React, { useState } from "react";
import "./App.css";
import Page from "./pages/Page";
import { ThemeContext } from "./context/ThemeContext";

const Ex02 = () => {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState('현진');

  console.log('다크모드 상태:', isDark)

  return (
    <div>
      <ThemeContext.Provider value={{isDark, setIsDark, user}}>
        <Page/>
      </ThemeContext.Provider>
    </div>
  );
};

export default Ex02;
