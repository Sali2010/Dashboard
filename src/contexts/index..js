import { createContext, useState } from "react";

export const contextStore = createContext({
  activeMenu: [],
  setActiveMenu: () => {},
  isClicked: [],
  setIsClicked: () => {},
  handleClick: () => {},
  screenSize: [],
  setScreenSize: () => {},
  currentColor: [],
  setCurrentColor: () => {},
  currentMode: [],
  setCurrentMode: () => {},
  setMode: () => {},
  setColor: () => {},
  themeSettings: [],
  setThemeSettings: () => {},
  initialState: [],
});

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };
  return (
    <contextStore.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
        initialState,
      }}
    >
      {children}
    </contextStore.Provider>
  );
};
