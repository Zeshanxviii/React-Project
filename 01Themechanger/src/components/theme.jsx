import React from 'react';

function ThemeChanger() {
    const [theme, setTheme] = React.useState('light');
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <div className={`theme-${theme}`}>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    );
  }

  export default ThemeChanger;


