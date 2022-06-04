import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button"  className={color} onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
}

export default Header;