type ButtonProps = {
    onClick: () => void
}

export const Button = ({onClick}: ButtonProps) => {
  return (
    <div className="button" onClick={onClick} />
  )
}
