import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Form, FormField, ISubmitButton } from '../../molecules/form'
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { transactionApi } from "../../../services/transaction.service"
import { useUser } from "../../../contexts/userContext"
import { strip } from "@fnando/cpf"
import { useState } from "react"
import { ErrorModal } from "../errorModal"

export const DepositModal = ({ children, open, handleClose }: { children: string, open: boolean, handleClose: () => void }) => {

    const { user, token } = useUser()

    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const initialFormFields: FormField[] = [
        {
            value: '',
            label: 'Valor',
            name: 'amount',
            type: 'number'
        }
    ]

    const submitButton: ISubmitButton = {
        method: 'POST',
        label: 'Depositar',
    }

    const submitDeposit = async (args: any) => {
        const formPayload: any = args.fields.reduce(
            (obj: any, field: any) => Object.assign(obj, { [field.name]: field.value }), {});
        const payload = Object.assign(formPayload, { event: "TRANSFER", document: strip(user.document) })
        payload.amount = parseFloat(payload.amount)
        try {
            await transactionApi.create(payload, token)
            handleClose()
        }
        catch (error: any) {
            if (error.response.data.statusCode === 400) {
                setErrorMessage('Houve um erro inesperado')
            }
            if (error.response.data.statusCode === 404) {
                setErrorMessage('Usuario não encontrado')
            }
            if (error.response.data.statusCode === 403) {
                setErrorMessage('CPF inválido')
            }
            if (error.response.data.statusCode === 401) {
                setErrorMessage('Usuario não autenticado')
            }
            setShowErrorModal(true)
        }
    }

    const handleCloseError = () => {
        setShowErrorModal(false);
    };

    return (
        <>
            {
                !showErrorModal ? <Dialog open={open} onClose={handleClose}>
                    <DialogTitle style={{ paddingBottom: '0px' }}>{children}</DialogTitle>
                    <DialogContent>
                        <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={""} formSubtitle={""} submit={submitDeposit}></Form>
                        <br />
                        <SubmitButtonAtom onClick={handleClose} disabled={false} loading={false}>Cancelar</SubmitButtonAtom>
                    </DialogContent>
                </Dialog> : <ErrorModal open={showErrorModal} handleClose={handleCloseError}><b>{errorMessage}</b></ErrorModal>
            }
        </>
    )
}