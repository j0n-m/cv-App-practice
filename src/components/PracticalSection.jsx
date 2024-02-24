/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PracticalSection({ name = '', children, initialIsEditable }) {
  //company name, position title, main responsibilities of your jobs, 
  //date from and to - when you worked for that company
  const [companyNameInput, companyPositionInput, pastJobSummary, pastJobYearFrom, pastJobYearTo] = children;
  const [isEditable, setIsEditable] = useState(initialIsEditable);

  function handleEditClick() {
    setIsEditable(!isEditable);
  }
  return (
    <div className="section">
      <h1 className="sectionHeading">{name}</h1>
      <div className="content">
        <div className="input">
          <label htmlFor="companyName">Company Name: </label>
          {isEditable ? companyNameInput : <p>{companyNameInput.props.text}</p>}
        </div>
        <div className="input">
          <label htmlFor="companyPosition">Company Position: </label>
          {isEditable ? companyPositionInput : <p>{companyPositionInput.props.text}</p>}
        </div>
        <div className="input">
          <label htmlFor="pastJobSummary">Job Responsibilities: </label>
          {isEditable ? pastJobSummary : <textarea readOnly value={pastJobSummary.props.text}></textarea>}
        </div>
        <div className="input input-range">
          <div className="input">
            <label htmlFor="pastJobYearFrom">Employed From: </label>
            {isEditable ? pastJobYearFrom : <p>{pastJobYearFrom.props.value}</p>}
          </div>
          <div className="input">
            <label htmlFor="pastJobYearTo">Employed To: </label>
            {isEditable ? pastJobYearTo : <p>{pastJobYearTo.props.value}</p>}
          </div>
        </div>


      </div>
      <input type="button" value={isEditable ? "Save" : "Edit"} onClick={handleEditClick} />

    </div>
  );
}