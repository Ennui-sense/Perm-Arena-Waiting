import clsx from "clsx";
import "./Logo.scss";

interface ILogo {
  className?: string;
  imageSrc: string
}

const Logo = ({ className, imageSrc }: ILogo) => {
  return (
    <a href="/" className={clsx(className, "logo")}>
      <img src={imageSrc} alt="" className="logo__image" width={180} height={72} />
    </a>
  )
}

export default Logo
