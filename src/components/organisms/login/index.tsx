import { Form, FormField, ISubmitButton } from "../../molecules/form"
import { LinkAtom } from '../../atoms/link'
import Grid from "@mui/material/Grid"
import { authApi } from "../../../services/auth.service"
import { useNavigate } from 'react-router-dom';
import { format } from "@fnando/cpf";
import { useUser } from "../../../contexts/userContext";
import { ErrorModal } from '../../molecules/errorModal'
import { useState } from "react";

const initialFormFields: FormField[] = [
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
]

const submitButton: ISubmitButton = {
    method: 'POST',
    label: 'Entrar',
}

export const Login = () => {

    const { login } = useUser()

    let navigate = useNavigate()

    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleClose = () => {
        setShowErrorModal(false);
    };

    const submitLogin = async (args: any) => {
        const formPayload: any = args.fields.reduce(
            (obj: any, field: any) => Object.assign(obj, { [field.name]: field.value }), {});
        try {
            const { data } = await authApi.auth(formPayload)
            if (data) {
                login(data.full_name, format(data.cpf), data.account, data.checkingAccountAmount.toLocaleString('pt-BR'), data.positions, data.consolidated.toLocaleString('pt-BR'))
                navigate("/dashboard")
            }
        }
        catch (error: any) {
            if (error.response.data.statusCode === 400) {
                setErrorMessage('Houve um erro inesperado')
            }
            if (error.response.data.statusCode === 404 || error.response.data.statusCode === 403) {
                setErrorMessage('Usuario ou senha incorretos')
            }
            setShowErrorModal(true)
        }
    }

    return (
        <Grid container boxShadow={3} spacing={2} direction="column" alignItems="center" justifyContent='center' style={{ padding: '40px', maxWidth: '420px', backgroundColor: '#FCFCFC', borderRadius: '24px' }} >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={'Seja bem vindo !'} formSubtitle={<h4 style={{ marginTop: '0px', fontWeight: '500' }}>Faça seu login</h4>} submit={submitLogin} />
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px" }}>
                <LinkAtom path="/register">Cadastre-se</LinkAtom>
            </Grid>
            <ErrorModal open={showErrorModal} handleClose={handleClose}><b>{errorMessage}</b></ErrorModal>
        </Grid>
    )
}