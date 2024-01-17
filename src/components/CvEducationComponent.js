// CvHeaderSection.js

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  cvArbeteContainer,
  cvArticlesMain,
  date,
} from "../styles/cv.module.css";

const CvEducationSection = ({ data }) => {
  const utbildningNodes = data.utbildning.nodes;
  return (
    <div className={cvArticlesMain}>
      <h3>Utbildning</h3>
      {utbildningNodes.map((utbildning, index) => (
        <div key={index} className={cvArbeteContainer}>
          <h4>{utbildning.skola}</h4>
          <h5>{utbildning.utbildning}</h5>
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
