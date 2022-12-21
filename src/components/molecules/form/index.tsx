import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { SubmitButtonAtom } from '../../atoms/submitButton';
import { FormTextFieldAtom } from '../../atoms/formTextField';

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

export const Form = ({ initialFormFields, submitButton, formTitle, formSubtitle, submit }: { initialFormFields: FormField[], submitButton: ISubmitButton, formTitle: string, formSubtitle: any, submit: (args: any) => void }) => {

    const [formFields, setFormFields] = useState<FormField[]>(initialFormFields)

    const [loading, setLoading] = useState<boolean>(false)

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

    useEffect(() => {
        setButtonDisabled(buttonDisabled)
    }, [buttonDisabled])

    const onChange = (name: string, value: string) => {
        const newFormFields = formFields.reduce((acc: FormField[], field: FormField) => {
            if (field.name === name) return [...acc, {
                ...field,
                value
            }]
            return [...acc, field]
        }, [])
        setFormFields(newFormFields)
        newFormFields.forEach(field => {
            if (field.value.length === 0) {
                setButtonDisabled(true)
            }
            else {
                setButtonDisabled(false)
            }
        })
    }

    const submitForm = async (): Promise<any> => {
        setLoading(true)
        await submit({ fields: formFields })
        setLoading(false)
    }

    return (
        <>
            <Grid container direction="column" alignItems="center" justifyContent='center' style={{ padding: "0px" }}>
                <Grid item xs={12} style={{ padding: "0px" }}>
                    <h2 style={{ marginTop: '0px', fontWeight: '500' }}>{formTitle}</h2>
                </Grid>
                <Grid item xs={12} style={{ padding: "0px" }}>
                    {formSubtitle}
                </Grid>
            </Grid>
            {
                formFields.map((field: FormField) => (
                    <Grid item xs={12} style={{ padding: "0px" }}>
                        <FormTextFieldAtom name={field.name} type={field.type} label={field.label} onChange={onChange} />
                    </Grid>)
                )
            }
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px" }}>
                <SubmitButtonAtom children={submitButton.label} disabled={buttonDisabled} onClick={submitForm} loading={loading}></SubmitButtonAtom>
            </Grid>
        </>
    )
}