import React from "react";
import LayoutThree from "../components/LayoutThree";
import { hideOnMobile, hideOnDesktop } from "../styles/meny.module.css";

export default function meny() {
  return (
    <LayoutThree>
      <h1
        style={{
          padding: "100px",
          display: "none", // Dölj h1 som standard
        }}
        className={hideOnDesktop}
      >
        Vad faan ska vi äta till mat?
      </h1>
      <h3
        style={{
          padding: "100px",
          display: "block", // Visa h3 som standard
        }}
        className={hideOnMobile}
      >
        Vad faan ska vi äta till mat?
      </h3>
    </LayoutThree>
  );
}
