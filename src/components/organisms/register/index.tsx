import { Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../../contexts/userContext"
import { userApi } from "../../../services/user.service"
import { LinkAtom } from "../../atoms/link"
import { ErrorModal } from "../../molecules/errorModal"
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

    const { login } = useUser()

    let navigate = useNavigate()

    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleClose = () => {
        setShowErrorModal(false);
    };

    const submitRegister = async (args: any) => {
        const formPayload: any = args.fields.reduce(
            (obj: any, field: any) => Object.assign(obj, { [field.name]: field.value }), {});
        try {
            const { data } = await userApi.create(formPayload)
            if (data) {
                login(data.full_name, data.cpf, data.account, data.checkingAccountAmount, data.positions, data.consolidated)
                navigate("/dashboard")
            }
        }
        catch (error: any) {
            if (error.response.data.statusCode === 400) {
                setErrorMessage('Houve um erro inesperado')
            }
            if (error.response.data.statusCode === 409) {
                setErrorMessage('Usuario já cadastrado')
            }
            if (error.response.data.statusCode === 403) {
                setErrorMessage('Número de conta inválido')
            }
            setShowErrorModal(true)
        }
    }

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={"Cadastro"} submit={submitRegister} />
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px" }}>
                <LinkAtom path="/login">Login</LinkAtom>
            </Grid>
            <ErrorModal open={showErrorModal} handleClose={handleClose}><b>{errorMessage}</b></ErrorModal>
        </Grid>
    )
}