// TechWidget.jsx
import React from 'react';
import '../IconWidget.css';

const IconWidget = ({ IconWidgetList }) => {
  return (
    <div className="card-grid">
      {IconWidgetList.map((tech, index) => (
        <div key={index} className="card">
          <img src={tech.src} alt={tech.alt} width="100" height="100" />
          <p>{tech.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default IconWidget;
