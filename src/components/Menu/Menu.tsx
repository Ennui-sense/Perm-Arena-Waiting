import clsx from "clsx";
import "./Menu.scss";

import { menuLinksData } from "~/data/menuLinksData";

interface IMenu {
  className?: string;
}

const Menu = ({ className }: IMenu) => {
  return (
    <nav className={clsx(className, "menu")}>
      <ul className="menu__list">
        {menuLinksData.map(({ id, label, href }) => (
          <li className="menu__item" key={id}>
            <a href={href} className="menu__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
