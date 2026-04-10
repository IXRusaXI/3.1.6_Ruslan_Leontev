import { useContext } from 'react'
import { FormContext } from './../Form/Form'

interface ButtonProps {
    children: ReactNode;
    onClick: () => {}
}

export const Button: React.FC<ButtonProps> = ({ 
    children,
    onClick
}) => {
    return <button onClick={onClick}>
        {children}
    </button>
}