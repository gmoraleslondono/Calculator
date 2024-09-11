type ButtonProps = {
    operant: string,
    onClick: () => void
}

export const Button = ({onClick, operant}: ButtonProps) => {
  return (
    <div className="button" onClick={onClick}>{operant}</div>
  )
}
