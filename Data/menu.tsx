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
    url: "/login",
  },
  {
    title: "For Individual",
    url: "/login",
  },
];

export default menu;
