// CvHeaderSection.js

import React from "react";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  cvArbeteContainer,
  readMoreButton,
  cvArticlesMain,
  date,
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
    <div className={cvArticlesMain}>
      <h3>Arbetslivserfarenhet</h3>
      {arbeteNodes.map((arbete, index) => (
        <div key={index} className={cvArbeteContainer}>
          <h4>{arbete.fretag}</h4>
          <h5>{arbete.titel}</h5>
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
              <button
                className={readMoreButton}
                onClick={() => toggleDescription(index)}
              >
                Läs mindre
              </button>
            </div>
          ) : (
            <button
              className={readMoreButton}
              onClick={() => toggleDescription(index)}
            >
              Läs mer
            </button>
          )}
          <p>{arbete.kompetenser}</p>
        </div>
      ))}
    </div>
  );
};

export default CvWorkSection;
