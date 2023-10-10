import React, { useContext } from "react";
import ThemeContext from "../Context/Themecontext";
import AppTheme from "../Apptheme";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const Theme = useContext(ThemeContext)[0];
    const CurrentTheme = AppTheme[Theme]

    return(
        <div
        onClick={()=>{
            setThemeMode(themeMode==="light" ? "dark" : "light");
        }}
        >
            <button
            style={{
                padding:"8px 30px",
                height:"40px",
                width:"150px",
                backgroundColor:"#233c7b",
                borderRadius:"5px",
                color:`${CurrentTheme.textColor2}`
            }}
            >{themeMode==="light" ? "Dark Mode" : "Light Mode"}</button>
        </div>
    )
}

export default ThemeToggler
