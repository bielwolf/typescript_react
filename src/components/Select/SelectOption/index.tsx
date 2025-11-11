import type React from 'react'

interface SelectionOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

const SelectOption = ({ label, value, ...rest }: SelectionOption) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  )
}

export default SelectOption