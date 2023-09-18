import { MenuTypes } from "@/Data/menu";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

const Navlink = ({ className, url, title }: MenuTypes) => {
  return (
    <Link href={url}>
      <li className={classNames("text-secondary-800 text-sm ", className)}>
        {title}
      </li>
    </Link>
  );
};

export default Navlink;
