import React, {useState} from 'react';
import './App.css';
import ThemeContext from './Context/Themecontext';
// import ThemeToggler from './Components/Themetoggler';

import BackupApp from './BackupApp';


function App() {
  const ThemeHook = useState("light");

  return(
    <>
    <ThemeContext.Provider value={ThemeHook}>
      <div>
        <BackupApp/>
      </div>
      
    </ThemeContext.Provider>
      
    </>
  )
}

export default App;