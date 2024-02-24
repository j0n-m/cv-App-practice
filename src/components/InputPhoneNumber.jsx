export default function InputPhoneNumber({ id, text, handleTextInput, placeholder }) {
  return (
    <input type="tel" id={id} value={text} onChange={handleTextInput} placeholder={placeholder} />
  )
}