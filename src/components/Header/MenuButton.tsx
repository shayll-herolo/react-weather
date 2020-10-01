import React from "react";
import {ReactComponent as MenuIcon } from '../../assets/menu.svg';

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
          <MenuIcon className="h-3 w-3" />
        </button>
      </div>
    );
}