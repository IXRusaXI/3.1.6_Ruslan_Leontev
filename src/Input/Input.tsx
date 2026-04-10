import { useContext } from 'react'
import { FormContext } from './../Form/Form'
import './style.scss'

interface InputProps {
    id?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ 
    id, 
    placeholder, 
    onChange 
}) => {
    const context = useContext(FormContext)
    const value = context[id][0];
    const setValue = context[id][1];

    function onChange(e) {
        setValue(e.target.value)
    }

    return <input
        id={id}
        className='form__input' 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
}