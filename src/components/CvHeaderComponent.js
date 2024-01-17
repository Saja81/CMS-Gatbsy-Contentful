// CvHeaderSection.js

import React from "react";
import { header, cvHeaderContainer } from "../styles/cv.module.css";

const CvHeaderSection = ({ kontakt }) => {
  return (
    <section id={header} className={cvHeaderContainer}>
      <h1>Curriculum Vitae</h1>
      <h2>{kontakt.namn}</h2>
    </section>
  );
};

export default CvHeaderSection;
