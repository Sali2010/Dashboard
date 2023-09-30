import { createContext, useState } from "react";

export const contextStore = createContext({
  activeMenu: [],
  setActiveMenu: () => {},
  isClicked: [],
  setIsClicked: () => {},
  handleClick: () => {},
  screenSize: [],
  setScreenSize: () => {},
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
      }}
    >
      {children}
    </contextStore.Provider>
  );
};
