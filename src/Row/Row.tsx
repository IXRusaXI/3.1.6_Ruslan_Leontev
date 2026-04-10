import { useContext } from 'react'
import { FormContext } from './../Form/Form'
import './style.scss'

export function Row({ children }: { children: ReactNode }) {
    return <div className='form__row'>
        { children }
    </div>
}