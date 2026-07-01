export type MenuLinkType = {
  label: string;
  id: number;
  href: string
};

export type MediaQuery = "mobile-s" | "mobile" | "tablet" | "desktop";

export type NewsType = {
	id: number;
	date: number;
	imageSrc: string;
	title: string;
	text: string;
}