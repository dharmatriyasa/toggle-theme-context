import { useThemeUpdate, useTheme } from "../context/ThemeContext";

const Square = () => {
    const darkTheme = useTheme();
    // const toggleButton = useThemeUpdate();
    const themeBg = (stateTheme) => {
        return stateTheme ? "bg-black": "bg-white"
    };
    const themeText = (stateTheme) => {
        return stateTheme ? "text-black": "text-white"
    };


    return (  
        <div className={`flex justify-center items-center w-44 h-32 ${themeBg(darkTheme)} w-full h-[92.5vh]`}>
            <h1 className={themeText(!darkTheme)}>Hello There</h1>
        </div>
    );
}
 
export default Square;