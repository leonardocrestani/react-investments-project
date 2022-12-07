import { Grid } from "@mui/material"
import { Form, FormField, ISubmitButton } from "../../molecules/form"

const initialFormFields: FormField[] = [
    {
        value: '',
        label: 'Nome completo',
        name: 'full_name',
        type: 'text'
    },
    {
        value: '',
        label: 'CPF',
        name: 'cpf',
        type: 'text'
    },
    {
        value: '',
        label: 'Número da conta',
        name: 'account',
        type: 'text'
    }
]

const submitButton: ISubmitButton = {
    method: 'POST',
    label: 'Cadastrar',
}

export const Register = () => {

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={"Cadastro"} />
        </Grid>
    )
}