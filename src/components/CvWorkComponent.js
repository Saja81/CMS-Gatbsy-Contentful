// CvHeaderSection.js

import React from "react";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  cvArbeteContainer,
  company,
  title,
  date,
  komp,
  readMoreButton,
} from "../styles/cv.module.css";

const CvWorkSection = ({ data }) => {
  const arbeteNodes = data.arbete.nodes;
  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div>
      <h1>Arbetslivserfarenhet</h1>
      {arbeteNodes.map((arbete, index) => (
        <div key={index} className={cvArbeteContainer}>
          <h1 className={company}>{arbete.fretag}</h1>
          <h2 className={title}>{arbete.titel}</h2>
          <p className={date}>
            {arbete.startdatum} - {arbete.slutdatum ?? "Nuvarande"}
          </p>
          <p>{arbete.subtitle}</p>
          {/* Visa "Läs mer" / "Läs mindre" knapp baserat på state */}
          {showDescription[index] ? (
            <div>
              <p>
                {documentToReactComponents(JSON.parse(arbete.beskrivning.raw))}
              </p>
              <p
                className={readMoreButton}
                onClick={() => toggleDescription(index)}
              >
                Läs mindre
              </p>
            </div>
          ) : (
            <p
              className={readMoreButton}
              onClick={() => toggleDescription(index)}
            >
              Läs mer
            </p>
          )}
          <p className={komp}>{arbete.kompetenser}</p>
        </div>
      ))}
    </div>
  );
};

export default CvWorkSection;
