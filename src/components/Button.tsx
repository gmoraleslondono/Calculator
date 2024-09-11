type ButtonProps = {
    operant: string,
    onClick: () => void
}

export const Button = ({onClick, operant}: ButtonProps) => {
  return (
    <div className=" w-10 h-10 rounded-full bg-violet-200 flex items-center justify-center font-mono m-1" onClick={onClick}>{operant}</div>
  )
}
