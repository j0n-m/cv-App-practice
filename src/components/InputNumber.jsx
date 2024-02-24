/* eslint-disable react/prop-types */
export default function InputNumber({ value, handleNumberInput, id, placeholder, minYear = "1900", maxYear = "2024" }) {
  return (
    <input type="number" id={id} value={value} onChange={handleNumberInput} placeholder={placeholder} min={minYear} max={maxYear} />
  )
}