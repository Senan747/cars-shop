import React from "react";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <div>
      {footerLinks.map((link) => (
        <div>{link.title}</div>
      ))}
    </div>
  );
};

export default Footer;
