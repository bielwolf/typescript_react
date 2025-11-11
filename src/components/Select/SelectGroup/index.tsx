import type React from 'react';
import styles from './SelectGroup.module.css'

interface SelectGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectGroup = ({ icon, children, ...rest }: SelectGroupProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.selector} {...rest}>
        {children}
      </select>
    </div>
  )
}

export default SelectGroup