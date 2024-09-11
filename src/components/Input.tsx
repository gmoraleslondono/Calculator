type InputProps = {
    value: string,
    onChange: (value: string) => void,
    placeholder: string
}

export const Input = ({value, onChange, placeholder}: InputProps) => {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>
  )
}
