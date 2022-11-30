import { Form, FormField, ISubmitButton } from "../../molecules/form"
import { LinkAtom } from '../../atoms/link'
import Grid from "@mui/material/Grid"

const initialFormFields: FormField[] = [
    {
        value: '',
        label: 'Digite seu CPF',
        name: 'cpf',
        type: 'text'
    },
]

const submitButton: ISubmitButton = {
    method: 'POST',
    label: 'Entrar',
}

export const Login = () => {
    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} />
            <Grid item xs={12}>
                <LinkAtom>Cadastre-se</LinkAtom>
            </Grid>
        </Grid>
    )
}