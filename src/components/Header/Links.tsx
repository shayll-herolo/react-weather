import React from "react";
import { NavLink } from "react-router-dom";

export interface LinksProps {
    show: boolean;
}

export default function Links({ show }: LinksProps) {
  const linksClassNames =
    "block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-purple-100 mr-4";
  return (
    <div
      className={`block ${
        show ? "" : "hidden"
      } lg:flex w-full flex-grow lg:items-center  lg:w-auto`}
    >
      <div className="text-sm text-purple-200 lg:flex-grow">
        <NavLink
          to="/"
          exact={true}
          className={linksClassNames}
          activeClassName="text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={linksClassNames}
          activeClassName="text-white"
        >
          Favorites
        </NavLink>
      </div>
    </div>
  );
}
