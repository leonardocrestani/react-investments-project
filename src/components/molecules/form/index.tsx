import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { ButtonAtom } from '../../atoms/button';
import { TextFieldAtom } from '../../atoms/textField';
import { userApi } from '../../../services/user.service';

export interface FormField {
    value: string,
    label: string,
    name: string,
    type: string
}

export const Form = ({ initialFormFields }: { initialFormFields: FormField[] }) => {

    const [formFields, setFormFields] = useState<FormField[]>(initialFormFields)

    const onChange = (name: string, value: string) => {
        const newFormFields = formFields.reduce((acc: FormField[], field: FormField) => {
            if (field.name === name) return [...acc, {
                ...field,
                value
            }]
            return [...acc, field]
        }, [])
        setFormFields(newFormFields)
    }

    const submitForm = async () => {
        let formPayload: any = formFields.find(field => {
            if (field.name === "cpf") {
                return field
            }
        })
        try {
            const user = await userApi.get(formPayload.value)
            console.log(user)
        }
        catch (error) {
            console.log(error)
            //modal para error
        }
    }

    return (
        <>
            {
                formFields.map((field: FormField) => (
                    <Grid item xs={12} >
                        <TextFieldAtom name={field.name} type={field.type} label={field.label} onChange={onChange} />
                    </Grid>)
                )
            }
            <Grid item xs={12}>
                <ButtonAtom onClick={submitForm}>Entrar</ButtonAtom>
            </Grid>
        </>
    )
}