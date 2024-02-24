export default function InputEmail({ text, handleTextInput, id, placeholder }) {

  return (
    <input type="email" onChange={handleTextInput} value={text} id={id} placeholder={placeholder} />
  )
}