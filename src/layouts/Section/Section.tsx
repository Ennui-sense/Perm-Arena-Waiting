import clsx from "clsx";
import "./Section.scss";
import type { JSX, ReactNode } from "react";

interface ISection {
  sectionName: string;
  description?: string;
  title: JSX.Element;
  children: ReactNode;
}

const Section = ({ sectionName, description, title, children }: ISection) => {
  return (
    <section className="section">
      <div className="section__innner container">
        <header className="section__header">
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__description">{description}</p>}
        </header>
        <div className={clsx("section__body", sectionName)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
