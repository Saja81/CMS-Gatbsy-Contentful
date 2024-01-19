import React from "react";
import { space } from "../styles/home.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className={space}></div>
      <div className="content">{children}</div>
      <div className={space}>test</div>
    </div>
  );
}
