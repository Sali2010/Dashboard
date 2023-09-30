import React, { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../../data/avatar.jpg";
import { Cart, Chat, Notifications, UserProfile } from "../index";
import { contextStore } from "../../contexts/index.";
const NavButton = ({ title, onClick, icon, color, dotColor }) => (
  <TooltipComponent position="BottomCenter" content={title}>
    <button
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      type="button"
      style={{ color }}
      onClick={onClick}
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
      >
      </span>
        {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useContext(contextStore);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mobileSize = screenSize <= 900 ? false : true;
    setActiveMenu(mobileSize);
  }, [screenSize]);

  console.log(screenSize);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title={"Menu"}
        color={"aqua"}
        onClick={() => {
          setActiveMenu((prevState) => !prevState);
        }}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title={"Cart"}
          color={"aqua"}
          onClick={() => {
            handleClick("cart");
          }}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Chat"}
          color={"aqua"}
          dotColor={"#03c9d7"}
          onClick={() => {
            handleClick("chat");
          }}
          icon={<BsChatLeft />}
        />
        <NavButton
          title={"Notifications"}
          color={"aqua"}
          dotColor={"#03c9d7"}
          onClick={() => {
            handleClick("notifications");
          }}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content={"profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8 " src={avatar} alt="" />
            <p>
              <span className="text-gray-400 font-bold text-14 ml-1">Hi,</span>
              <span className="text-gray-400 font-bold text-14 ml-1">Sali</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 font-bold text-14 " />
          </div>
        </TooltipComponent>

        {isClicked.cart && <p>cart</p>}
      </div>
    </div>
  );
};

export default Navbar;
