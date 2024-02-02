import React from "react";
import { Link } from "gatsby";
import LayoutThree from "../components/LayoutThree";

export default function meny() {
  const HeaderTag = window.innerWidth < 650 ? "h3" : "h1";

  return (
    <LayoutThree>
      <HeaderTag style={{ padding: "100px" }}>
        Vad faan ska vi äta till mat?
      </HeaderTag>
    </LayoutThree>
  );
}
