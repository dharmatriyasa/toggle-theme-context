import { useTheme, useThemeUpdate } from "../context/ThemeContext";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
    const darkTheme = useTheme();
    const toggleButton = useThemeUpdate();
    const themeBg = (stateTheme) => {
        return stateTheme ? "bg-black": "bg-white"
    };
    const themeText = (stateTheme) => {
        return stateTheme ? "text-black": "text-white"
    };
    const themeBorder = (stateTheme) => {
        return stateTheme ? "border-white": "border-black"
    }
    return (
        <nav className={`flex h-14 w-full ${themeBg(darkTheme)}`}>
            <div className="grow-0 ml-20">
                <span className="px-4 py-2"></span>
            </div>
            <ul className={`flex justify-center items-center ${themeBg(darkTheme)} ${themeText(!darkTheme)} grow`}>
                <li className="mx-5">Home</li>
                <li className="mx-5">About</li>
                <li className="mx-5">Contact</li>
            </ul>
            <div className="flex justify-center items-center grow-0 mr-5">
                {/* <button 
                    className={`border px-4 py-2 bg-white ${themeBg(darkTheme)} ${themeBorder(darkTheme)}`}
                    onClick={toggleButton}
                >
                    Toggle
                </button> */}
                <ToggleTheme 
                    toggleHandling={toggleButton}
                    darkTheme={darkTheme}
                />
            </div>
        </nav>
    );
}
 
export default Navbar;