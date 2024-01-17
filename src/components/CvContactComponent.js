// CvHeaderSection.js

import React from "react";

const CvContactSection = ({ kontakt }) => {
  return (
    <div>
      <p>Ålder: {kontakt.lder}</p>
      <p>LinkedIn: {kontakt.linkedIn}</p>
      <p>E-post: {kontakt.mail}</p>
    </div>
  );
};

export default CvContactSection;
