import { list } from "postcss";
import React from "react";
import { Link } from "react-router-dom";
const Links = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "Products",
    link: "/Products",
  },
  {
    title: "Form",
    link: "/Form",
  },
];
const Navbar = () => {
  return (
    <ul>
      {Links.map((v, i) => (
        <li key={i}>
          <Link to={v.link}>{v.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
