import clsx from "clsx";
import "./Section.scss";
import type { ReactNode } from "react";

interface ISection {
  sectionName: string;
  description?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  rightContent?: string;
}

const Section = ({
  sectionName,
  description,
  title,
  subtitle,
  children,
  rightContent,
}: ISection) => {
  return (
    <section className="section">
      <div className="section__innner container">
        <header className="section__header">
          <div className="section__header-info">
            <h2 className="section__title">{title}</h2>
            <p className="section__subtitle">{subtitle}</p>
          </div>
          {description && <p className="section__description">{description}</p>}
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
