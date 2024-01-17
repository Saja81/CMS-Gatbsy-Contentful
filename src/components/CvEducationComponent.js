// CvHeaderSection.js

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  cvArbeteContainer,
  company,
  title,
  date,
} from "../styles/cv.module.css";

const CvEducationSection = ({ data }) => {
  const utbildningNodes = data.utbildning.nodes;
  return (
    <div>
      <h1>Utbildning</h1>
      {utbildningNodes.map((utbildning, index) => (
        <div key={index} className={cvArbeteContainer}>
          <h1 className={company}>{utbildning.skola}</h1>
          <h2 className={title}>{utbildning.utbildning}</h2>
          <p className={date}>{utbildning.datum}</p>
          <p>
            {documentToReactComponents(JSON.parse(utbildning.beskrivning.raw))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CvEducationSection;
