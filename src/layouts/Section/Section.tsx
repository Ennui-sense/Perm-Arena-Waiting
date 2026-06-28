import clsx from "clsx";
import "./Section.scss";
import type { ReactNode } from "react";

interface ISection {
  sectionName: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  rightContent?: string;
  withHeaderCenter?: boolean;
}

const Section = ({
  sectionName,
  title,
  subtitle,
  children,
  rightContent,
  withHeaderCenter,
}: ISection) => {
  return (
    <section className="section">
      <div className="section__innner container">
        <header
          className={clsx("section__header", {
            "section__header--center": withHeaderCenter,
          })}
        >
          <div className="section__header-info">
            <h2 className="section__title">{title}</h2>
            <p className="section__subtitle">{subtitle}</p>
          </div>
          {rightContent && (
            <p className="section__right-content">{rightContent}</p>
          )}
        </header>
        <div className={clsx("section__body", sectionName)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
