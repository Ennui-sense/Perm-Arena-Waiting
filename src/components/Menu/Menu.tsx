import clsx from "clsx";
import "./Menu.scss";

import { MenuLinksData } from "~/data/HeaderLinksData";

interface IMenu {
  className?: string;
}

const Menu = ({ className }: IMenu) => {
  return (
    <nav className={clsx(className, "menu")}>
      <ul className="menu__list">
        {MenuLinksData.map(({ id, label, href }) => (
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
