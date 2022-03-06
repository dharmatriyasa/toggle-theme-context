import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}