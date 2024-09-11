type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className="w-full m-3 p-1 rounded-md border-solid border-2 border-[#dfe3e8]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
