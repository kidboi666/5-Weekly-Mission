interface Iinput {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: () => void;
}

function Input({ id, name, type, placeholder, className, onChange, value, onBlur }: Iinput) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
}

export default Input;
