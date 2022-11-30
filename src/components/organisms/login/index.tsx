import { Form, FormField, ISubmitButton } from "../../molecules/form"
import { LinkAtom } from '../../atoms/link'
import Grid from "@mui/material/Grid"
import { userApi } from "../../../services/user.service"

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

    const submitLogin = async (formFields: FormField[]): Promise<void> => {
        let formPayload: any = formFields.find(field => {
            if (field.name === "cpf") {
                return field
            }
            else {
                return formFields
            }
        })
        try {
            const user = await userApi.get(formPayload.value)
            console.log(user)
            if (user) {

            }
        }
        catch (error) {
            console.log(error)
            //modal para error
        }
    }

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} />
            <Grid item xs={12}>
                <LinkAtom path="/register">Cadastre-se</LinkAtom>
            </Grid>
        </Grid>
    )
}