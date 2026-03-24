import React from "react";

const ScoreBadge = ({ score } : {score: number}) => {
  let label = "";
  let styles = "";

  if (score > 70) {
    label = "Strong";
    styles = "bg-badge-green text-green-600";
  } else if (score > 49) {
    label = "Good Start";
    styles = "bg-badge-yellow text-yellow-600";
  } else {
    label = "Needs Work";
    styles = "bg-badge-red text-red-600";
  }

  return (
    <div className={`inline-block px-3 py-1 rounded-md ${styles}`}>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;