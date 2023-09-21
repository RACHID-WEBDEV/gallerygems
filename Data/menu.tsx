export type MenuTypes = {
  title: string;
  url: string;
  className?: string;
};

const menu: MenuTypes[] = [
  {
    title: "Features",
    url: "/",
  },
  {
    title: "For Companies",
    url: "/register",
  },
  {
    title: "For Individual",
    url: "/register",
  },
];

export default menu;
