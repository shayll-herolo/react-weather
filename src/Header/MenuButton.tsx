import React from "react";

export interface MenuButtonProps {
    click: React.MouseEventHandler
    className: string;
}

export default function MenuButton({className, click}: MenuButtonProps) {
    return (
        <div className={className}>
        <button
          className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white"
          onClick={click}
        >
          <img
            className="h-3 w-3"
            src={process.env.PUBLIC_URL + "/assets/menu.svg"}
            alt="Menu"
          />
        </button>
      </div>
    );
}