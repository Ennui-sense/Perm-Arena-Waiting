import clsx from "clsx";
import "./Menu.scss";

import { MenuLinksData } from "~/data/HeaderLinksData";

import { useState } from "react";

interface IMenu {
  className?: string;
}

const Menu = ({ className }: IMenu) => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<number>(1);

  return (
    <nav className={clsx(className, "menu")}>
      <ul className="menu__list">
        {MenuLinksData.map(({ id, label, href }) => (
          <li className="menu__item" key={id}>
            <a href={href} className={clsx("menu__link", id === activeMenuItemId && "menu__link--active glow-effect")}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
