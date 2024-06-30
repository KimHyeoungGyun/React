import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isDark, user } = useContext(ThemeContext);

  // const styleDiv = {
  //   background: isDark ? "black" : "white",
  //   color: isDark ? "white" : "black",
  // };
  return (
    <div className={`header ${isDark}?'header-dark :'`} >
      <h1>Welcome {user}!</h1>
    </div>
  );
};

export default Header;
