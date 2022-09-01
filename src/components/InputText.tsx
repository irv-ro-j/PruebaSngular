import PropTypes from 'prop-types';
import { useState } from 'react';

const baseClasses = "border border-slate-300 px-3 py-1 rounded-md bg-slate-50/50 outline-slate-500 w-64"
const hoverClasses = "hover:bg-white hover:placeholder-slate-400"
const styleClasses = `${baseClasses} ${hoverClasses}`

interface InputTextComponentProps {
    onInput: (value: string) => void
}

export const InputText = ({ onInput }: InputTextComponentProps) => {
    const [ value, setValue ] = useState('')

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value.trim() === '') return

        setValue('')
        onInput( value.trim() )
    }
    return (
        <form aria-label='form' onSubmit={ onSubmit }>
            <input
                type="number"
                placeholder="Número para calcular Sngular"
                className={ styleClasses }
                value={ value }
                onChange={ onInputChange }
            />
        </form>
    )
}

InputText.propTypes = {
    onInput: PropTypes.func.isRequired
}