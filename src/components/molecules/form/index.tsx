import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { SubmitButtonAtom } from '../../atoms/submitButton';
import { FormTextFieldAtom } from '../../atoms/formTextField';
import { userApi } from '../../../services/user.service';
import { useUser } from '../../../contexts/userContext'
import { useNavigate } from 'react-router-dom';

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

export const Form = ({ initialFormFields, submitButton, formTitle }: { initialFormFields: FormField[], submitButton: ISubmitButton, formTitle: string }) => {

    const { login } = useUser()

    const [formFields, setFormFields] = useState<FormField[]>(initialFormFields)

    const [loading, setLoading] = useState<boolean>(false)

    let navigate = useNavigate()

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
        setLoading(true)
        if (submitButton.label === 'Entrar') {
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
                    navigate("/dashboard")
                    setLoading(false)
                }
            }
            catch (error) {
                console.log(error)
                //modal para error
                setLoading(false)
            }
        }
        if (submitButton.label === 'Cadastrar') {
            const formPayload: any = formFields.reduce(
                (obj, field) => Object.assign(obj, { [field.name]: field.value }), {});
            console.log(formPayload)
            try {
                const { data } = await userApi.create(formPayload)
                console.log('criou')
                if (data) {
                    login(data.full_name, data.cpf, data.account, data.checkingAccountAmount, data.positions, data.consolidated)
                    navigate("/dashboard")
                    setLoading(false)
                }
            }
            catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
    }

    return (
        <>
            <Grid item xs={12} style={{ padding: "0px" }}>
                <h2>{formTitle}</h2>
            </Grid>
            {
                formFields.map((field: FormField) => (
                    <Grid item xs={12} style={{ padding: "0px" }}>
                        <FormTextFieldAtom name={field.name} type={field.type} label={field.label} onChange={onChange} />
                    </Grid>)
                )
            }
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px" }}>
                <SubmitButtonAtom children={submitButton.label} onClick={submitForm} loading={loading}></SubmitButtonAtom>
            </Grid>
        </>
    )
}