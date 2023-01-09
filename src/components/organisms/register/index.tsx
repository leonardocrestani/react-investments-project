import { Fab, Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../../contexts/userContext"
import { authApi } from "../../../services/auth.service"
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
        name: 'document',
        type: 'text'
    },
    {
        value: '',
        label: 'Senha',
        name: 'password',
        type: 'password'
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
            await userApi.create(formPayload)
            const payload = { document: formPayload.document, password: formPayload.password }
            const { data: { user, access_token } } = await authApi.auth(payload)
            if (user) {
                localStorage.setItem('token', access_token)
                login(user.full_name, user.document, user.account, user.checkingAccountAmount, user.positions, user.consolidated)
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
        <Grid container boxShadow={3} spacing={2} direction="column" alignItems="center" justifyContent='center' style={{ padding: '40px', maxWidth: '420px', backgroundColor: '#FCFCFC', borderRadius: '24px' }} >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={"Cadastro"} formSubtitle={<></>} submit={submitRegister} />
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px" }}>
                <LinkAtom path="/login">Login</LinkAtom>
            </Grid>
            <ErrorModal open={showErrorModal} handleClose={handleClose}><b>{errorMessage}</b></ErrorModal>
        </Grid>
    )
}