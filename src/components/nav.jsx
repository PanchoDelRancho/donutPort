import React from "react";
import { VscMail } from "react-icons/vsc";

export default function Nav() {
  return (
    <div className="Nav">
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a className="messBox button" href="mailto:faparicio.fa@gmail.com">
        <VscMail />
      </a>
    </div>
  );
}
