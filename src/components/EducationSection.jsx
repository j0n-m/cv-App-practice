/* eslint-disable react/prop-types */
import { useState } from "react";
import InputText from "./InputText";
import InputNumber from "./InputNumber"

export function EducationSection(
  { name, initialIsEditable, schoolNameText, handleSchoolNameInput,
    titleOfStudyText, handleTitleOfStudyInput, studyYearFrom, handleStudyYearFromInput,
    studyYearTo, handleStudyYearToInput }
) {
  //school name, title of study and date of study
  const [isEditable, setIsEditable] = useState(initialIsEditable);

  function handleEditClick() {
    setIsEditable(!isEditable);
  }
  return (
    <div className="section">
      <h1 className="sectionHeading">{name}</h1>
      <div className="content">
        <label htmlFor="schoolName">School Name: </label>
        {isEditable ?
          <InputText
            id='schoolName'
            text={schoolNameText}
            handleTextInput={handleSchoolNameInput}
            placeholder="University of ..."
          /> : <p>{schoolNameText}</p>}
        <label htmlFor="titleOfStudy">Title of Study: </label>
        {isEditable ?
          <InputText
            id="titleOfStudy"
            text={titleOfStudyText}
            handleTextInput={handleTitleOfStudyInput}
            placeholder="Bachelor of Science..."
          /> : <p>{titleOfStudyText}</p>}

        <label htmlFor="studyDateFrom">From Year: </label>
        {isEditable ?
          <InputNumber
            minYear={1700}
            maxYear={3000}
            placeholder={2007}
            id="studyDateFrom"
            value={studyYearFrom}
            handleNumberInput={handleStudyYearFromInput}
          /> : <p>{studyYearFrom}</p>}
        <label htmlFor="studyDateTo">To Year: </label>
        {isEditable ?
          <InputNumber
            minYear={1700}
            maxYear={3000}
            placeholder={2011}
            id="studyDateTo"
            value={studyYearTo}
            handleNumberInput={handleStudyYearToInput}
          /> : <p>{studyYearTo}</p>}
      </div>
      <input type="button" value={isEditable ? "Save" : "Edit"} onClick={handleEditClick} />

    </div>
  );
}