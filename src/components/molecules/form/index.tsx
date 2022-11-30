import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { SubmitButtonAtom } from '../../atoms/submitButton';
import { FormTextFieldAtom } from '../../atoms/formTextField';
import { userApi } from '../../../services/user.service';
import { useUser } from '../../../contexts/userContext'
import { redirect, Route } from 'react-router-dom';

export interface FormField {
    value: string,
    label: string,
    name: string,
    type: string
}

export interface ISubmitButton {
    method: string,
    label: string,
}

export const Form = ({ initialFormFields, submitButton }: { initialFormFields: FormField[], submitButton: ISubmitButton }) => {

    const { full_name, login } = useUser()

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

    const submitForm = async (): Promise<any> => {
        let formPayload: any = formFields.find(field => {
            if (field.name === "cpf") {
                return field
            }
            else {
                return formFields
            }
        })
        try {
            const { data } = await userApi.get(formPayload.value)
            console.log(data)
            if (data) {
                login(data.full_name, data.cpf, data.account, data.checkingAccountAmount, data.positions, data.consolidated)
                return <Route path="/dashboard" />
            }
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
                        <FormTextFieldAtom name={field.name} type={field.type} label={field.label} onChange={onChange} />
                    </Grid>)
                )
            }
            <Grid item xs={12}>
                <SubmitButtonAtom children={submitButton.label} onClick={submitForm}></SubmitButtonAtom>
            </Grid>
        </>
    )
}