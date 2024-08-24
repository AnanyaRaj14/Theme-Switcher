import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// const [night, setNight] = useState(false);
//     export const toggleNight = () => {
//         setNight(!night);
//     }

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}