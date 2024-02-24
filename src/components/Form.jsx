/* eslint-disable react/prop-types */
import { EducationSection } from "./EducationSection"
import GeneralSection from "./GeneralSection"
import PracticalSection from "./PracticalSection"
import InputText from "./InputText";
import { InputTextArea } from "./InputTextArea";
import { useState } from "react";
import InputNumber from "./InputNumber";

export default function Form({ id }) {
  //General Section States
  const [firstNameText, setFirstNameText] = useState('')
  const [lastNameText, setLastNameText] = useState('')
  const [emailText, setEmailText] = useState('');
  const [phoneNumberText, setPhoneNumberText] = useState('');

  //Education Section
  const [schoolNameText, setSchoolNameText] = useState('');
  const [titleOfStudyText, setTitleOfStudyText] = useState('');
  const [studyYearFrom, setStudyYearFrom] = useState('');
  const [studyYearTo, setStudyYearTo] = useState('');

  //Practical Section
  //company name, position title, main responsibilities of your jobs, 
  //date from and to - when you worked for that company
  const [companyNameText, setCompanyNameText] = useState('')
  const [companyPositionText, setCompanyPositionText] = useState('');
  const [pastJobSummary, setPastJobSummary] = useState('');
  const [pastJobYearFrom, setPastJobYearFrom] = useState('');
  const [pastJobYearTo, setPastJobYearTo] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }
  function handleFirstNameInput(e) {
    setFirstNameText(e.target.value);
  }
  function handleLastNameInput(e) {
    setLastNameText(e.target.value);
  }
  function handleEmailInput(e) {
    setEmailText(e.target.value);
  }
  function handlePhoneInput(e) {
    setPhoneNumberText(e.target.value);
  }
  function handleSchoolNameInput(e) {
    setSchoolNameText(e.target.value);
  }
  function handleTitleOfStudyInput(e) {
    setTitleOfStudyText(e.target.value);
  }
  function handleStudyYearFromInput(e) {
    setStudyYearFrom(e.target.value);
  }
  function handleStudyYearToInput(e) {
    setStudyYearTo(e.target.value);
  }
  function handleReset() {
    setFirstNameText('')
    setLastNameText('')
    setEmailText('')
    setPhoneNumberText('')
    setSchoolNameText('')
    setTitleOfStudyText('')
    setStudyYearFrom('')
    setStudyYearTo('')
    setCompanyNameText('')
    setCompanyPositionText('')
    setPastJobSummary('')
    setPastJobYearFrom('')
    setPastJobYearTo('')
    console.log('Form reset')
  }
  function handleCompanyNameInput(e) {
    setCompanyNameText(e.target.value)
  }
  function handleCompanyPositionInput(e) {
    setCompanyPositionText(e.target.value)
  }
  function handlePastJobSummaryInput(e) {
    setPastJobSummary(e.target.value);
  }
  function handlePastJobYearFromInput(e) {
    setPastJobYearFrom(e.target.value)
  }
  function handlePastJobYearToInput(e) {
    setPastJobYearTo(e.target.value)
  }


  return (
    <>
      <form id={id} onSubmit={handleFormSubmit}>
        <GeneralSection
          name="General Section"
          firstNameText={firstNameText}
          handleFirstNameInput={handleFirstNameInput}
          lastNameText={lastNameText}
          handleLastNameInput={handleLastNameInput}
          emailText={emailText}
          handleEmailInput={handleEmailInput}
          phoneNumberText={phoneNumberText}
          handlePhoneInput={handlePhoneInput}
          initialIsEditable={true}
        />
        {/* <p>fname: {firstNameText}</p>
      <p>lname: {lastNameText}</p>
      <p>email: {emailText}</p>
      <p>phone: {phoneNumberText}</p> */}
        <EducationSection
          name="Education"
          initialIsEditable={false}
          schoolNameText={schoolNameText}
          handleSchoolNameInput={handleSchoolNameInput}
          titleOfStudyText={titleOfStudyText}
          handleTitleOfStudyInput={handleTitleOfStudyInput}
          studyYearFrom={studyYearFrom}
          handleStudyYearFromInput={handleStudyYearFromInput}
          studyYearTo={studyYearTo}
          handleStudyYearToInput={handleStudyYearToInput}
        />
        {/* <p>school: {schoolNameText}</p>
      <p>title of study: {titleOfStudyText}</p>
      <p>study year from: {studyYearFrom}</p>
      <p>study year to: {studyYearTo}</p> */}

        {/* text, handleTextInput, id, placeholder */}
        <PracticalSection name="Experience" initialIsEditable={true}>
          <InputText
            handleTextInput={handleCompanyNameInput}
            text={companyNameText}
            placeholder="Amazon"
            id="companyName"
          />
          <InputText
            handleTextInput={handleCompanyPositionInput}
            text={companyPositionText}
            placeholder="IT"
            id="companyPosition"
          />
          {/* id, rows = "4", cols = "40", placeholder, text */}
          <InputTextArea
            id="pastJobSummary"
            placeholder="Day to day operations with...."
            text={pastJobSummary}
            handleTextInput={handlePastJobSummaryInput}
          />
          {/* value, handleNumberInput, id, placeholder, minYear, maxYear */}
          <InputNumber
            value={pastJobYearFrom}
            handleNumberInput={handlePastJobYearFromInput}
            id="pastJobYearFrom"
            placeholder={"2010"}
          />
          <InputNumber
            value={pastJobYearTo}
            handleNumberInput={handlePastJobYearToInput}
            id="pastJobYearTo"
            placeholder={"2012"}
          />

        </PracticalSection>

        <div className="formBtns">
          <input type="submit" value="submit" />
          <input type="reset" value="reset" onClick={handleReset} />
        </div>
      </form>
    </>
  )
}