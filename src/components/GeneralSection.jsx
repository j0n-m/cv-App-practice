import { useState } from "react";
import InputText from "./InputText";
import InputEmail from "./InputEmail";
import InputPhoneNumber from "./InputPhoneNumber";
/* eslint-disable react/prop-types */
//first name, last name, email and phone number
export default function GeneralSection(
  { name, firstNameText, handleFirstNameInput, lastNameText, handleLastNameInput,
    firstNameId = 'firstName', lastNameId = 'lastName', emailText, handleEmailInput, emailId = 'email',
    phoneNumberId = 'phoneNumber', phoneNumberText, handlePhoneInput, initialIsEditable }
) {
  const [isEditable, setIsEditable] = useState(initialIsEditable);

  function handleEditClick() {
    setIsEditable(!isEditable);
  }

  return (
    <div className="section">
      <h1 className="sectionHeading">{name}</h1>
      <div className="content">
        <label htmlFor="firstName">First Name: </label>
        {/* <input type="text" id="firstName" name="firstName" placeholder="John" value={data.firstName} onChange={handleFirstNameChange} /> */}
        {isEditable ?
          <InputText
            text={firstNameText}
            handleTextInput={handleFirstNameInput}
            id={firstNameId}
            placeholder="Joe"
          /> : <p>{firstNameText}</p>}
        <label htmlFor="lastName">Last Name: </label>
        {isEditable ?
          <InputText
            text={lastNameText}
            handleTextInput={handleLastNameInput}
            id={lastNameId}
            placeholder="Shmoe"
          /> : <p>{lastNameText}</p>}
        <label htmlFor="email">Email: </label>
        {isEditable ?
          <InputEmail
            text={emailText}
            handleTextInput={handleEmailInput}
            id={emailId}
            placeholder="joe@email.com"
          /> : <p>{emailText}</p>}
        <label htmlFor="phoneNumber">Phone Number: </label>
        {isEditable ?
          <InputPhoneNumber
            id={phoneNumberId}
            text={phoneNumberText}
            handleTextInput={handlePhoneInput}
            placeholder="888-123-4567"
          /> : <p>{phoneNumberText}</p>}
      </div>
      <input type="button" value={isEditable ? "Save" : "Edit"} onClick={handleEditClick} />
    </div>
  );
}