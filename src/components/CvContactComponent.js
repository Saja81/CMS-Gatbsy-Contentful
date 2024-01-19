import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { cvAsideMain, cvAsideContainer } from "../styles/cv.module.css";

const CvContactSection = ({ kontakt, kompetenserNodes }) => {
  return (
    <div className={cvAsideMain}>
      <div className={cvAsideContainer}>
        <h3>Kontakt</h3>
        <p>{kontakt.namn}</p>
        <p>{kontakt.lder}</p>
        <p>{kontakt.linkedIn}</p>
        <p>{kontakt.mail}</p>
      </div>
      <div className={cvAsideContainer}>
        <h3>Kompetenser</h3>
        {kompetenserNodes.map((kompetens, index) => (
          <div key={index}>
            <h4>{kompetens.titel}</h4>
            <p>
              {documentToReactComponents(JSON.parse(kompetens.beskrivning.raw))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvContactSection;
