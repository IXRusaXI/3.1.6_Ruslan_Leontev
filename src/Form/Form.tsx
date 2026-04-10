import { createContext, useState, useContext, useEffect } from 'react'
import { Button } from './../Button/Button'
import { Input } from './../Input/Input'
import { Row } from './../Row/Row'
import './style.scss'

type FieldId = 'name' | 'surname' | 'address';

type FormContextType = Record<FieldId, [string, React.Dispatch<React.SetStateAction<string>>]>;

export const FormContext = createContext<FormContextType>(null);

interface FormProps {
    children: ReactNode,
    setFormData: (data: { firstName: string; secondName: string; address: string }) => void;
}

function Form({ children, setFormData }: FormProps) {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        setFormData({
            firstName,
            secondName,
            address
        })
    }, [firstName, secondName, address])

    return <FormContext.Provider value={{
        name: [firstName, setFirstName],
        surname: [secondName, setSecondName],
        address: [address, setAddress]
    }}>
        <div className='form'>
            {children}
        </div>
    </FormContext.Provider>;
}

interface FormType {
    Row: React.FC<{ children: ReactNode }>;
    Input: React.FC<{ children: ReactNode }>;
    Button: React.FC<{ children: ReactNode }>;
}

Form.Row = Row;
Form.Input = Input;
Form.Button = Button;

const CompoundForm = Form as FormType;
export { CompoundForm as Form };