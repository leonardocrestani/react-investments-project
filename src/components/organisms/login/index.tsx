import { Form, FormField, ISubmitButton } from "../../molecules/form"
import { LinkAtom } from '../../atoms/link'
import Grid from "@mui/material/Grid"
import { userApi } from "../../../services/user.service"
import { useNavigate } from 'react-router-dom';
import { format } from "@fnando/cpf";
import { useUser } from "../../../contexts/userContext";
import { ErrorModal } from '../../molecules/errorModal'
import { useState } from "react";

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

    const { login } = useUser()

    let navigate = useNavigate()

    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleClose = () => {
        setShowErrorModal(false);
    };

    const submitLogin = async (args: any) => {
        let formPayload: any = args.fields.find((field: any) => {
            if (field.name === "cpf") {
                return field
            }
            else {
                return args.fields
            }
        })
        try {
            const { data } = await userApi.get(formPayload.value)
            if (data) {
                login(data.full_name, format(data.cpf), data.account, data.checkingAccountAmount.toLocaleString('pt-BR'), data.positions, data.consolidated.toLocaleString('pt-BR'))
                navigate("/dashboard")
            }
        }
        catch (error: any) {
            /*if (error.response.data.statusCode === 400) {
                setErrorMessage('Houve um erro inesperado')
            }
            if (error.response.data.statusCode === 404) {
                setErrorMessage('Usuario não encontrado')
            }*/
            setShowErrorModal(true)
        }
    }

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={"Login"} submit={submitLogin} />
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px" }}>
                <LinkAtom path="/register">Cadastre-se</LinkAtom>
            </Grid>
            <ErrorModal open={showErrorModal} handleClose={handleClose}><b>{errorMessage}</b></ErrorModal>
        </Grid>
    )
}