import type { Route } from "./+types/_index";

import Header from "~/layouts/Header/Header";
import Hero from "~/sections/Hero/Hero";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Кинкали | Главная" },
    { name: "description", content: "Добро пожаловать на сайт Кинкали" },
  ];
}

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default HomePage
