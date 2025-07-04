import React from "react";
// this is my report card function which displays the reports. The a tag and href are for accessibility reasons to allow the user to tab through each report card
const ReportCard = ({ report }) => {
  return (
    <a href="#" className="card">
      <h3>{report.name}</h3>
      <p><strong>Category:</strong> {report.category}</p>
      <p><strong>Created:</strong> {new Date(report.createdAt).toLocaleDateString()}</p>
    </a>
  );
};

export default ReportCard;
