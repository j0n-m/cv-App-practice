/* eslint-disable react/prop-types */
export function InputTextArea({ id, rows = "4", cols = "40", placeholder, text, handleTextInput, maxlength = "160" }) {
  return (
    <textarea id={id} cols={cols} rows={rows} value={text} placeholder={placeholder} onChange={handleTextInput} maxLength={maxlength}>
    </textarea>
  )

}