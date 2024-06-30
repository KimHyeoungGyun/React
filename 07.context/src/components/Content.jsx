import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {

  const { isDark, user } = useContext(ThemeContext);

  const styleDiv = {
    background: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };
  return (
    <div className='content' style={styleDiv}>{user}님, 좋은하루 되세요~!👍👍</div>
  )
}

export default Content