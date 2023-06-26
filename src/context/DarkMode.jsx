import React from "react";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

    const currentTheme = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    )

}
