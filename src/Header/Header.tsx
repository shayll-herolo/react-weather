import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Links from "./Links";
import MenuButton from "./MenuButton";

export default function Header() {
  const [show, setShow] = React.useState(false);

  const handleMenuClick = () => {
    setShow(!show);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
      {/* Logo + AppName */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <FontAwesomeIcon className="text-2xl mr-2" icon={faCloudSun}/>
        <span className="font-semibold text-xl">Weather</span>
      </div>
      <MenuButton className="block lg:hidden" click={handleMenuClick} />
      <Links show={show} />
    </nav>
  );
}
