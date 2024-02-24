/* eslint-disable react/prop-types */
export default function InputText({ text, handleTextInput, id, placeholder }) {
  return (
    <input type="text" id={id} value={text} onChange={handleTextInput} placeholder={placeholder} />
  )
}