import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Form, FormField, ISubmitButton } from '../../molecules/form'
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { orderApi } from "../../../services/order.service"
import { useUser } from "../../../contexts/userContext"
import { ErrorModal } from "../errorModal"
import { useState } from "react"

export const BuyModal = ({ children, open, handleClose }: { children: string, open: boolean, handleClose: () => void }) => {

    const { cpf } = useUser()

    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const initialFormFields: FormField[] = [
        {
            value: '',
            label: 'Quantidade',
            name: 'amount',
            type: 'number'
        },
    ]

    const submitButton: ISubmitButton = {
        method: 'POST',
        label: 'Comprar',
    }

    const submitBuy = async (args: any) => {
        let formPayload: any = args.fields.reduce(
            (obj: any, field: any) => Object.assign(obj, { [field.name]: field.value }), {});
        formPayload = Object.assign(formPayload, { symbol: children.split(' ')[2] })
        formPayload.amount = parseInt(formPayload.amount)
        try {
            await orderApi.create(formPayload, cpf)
        }
        catch (error: any) {
            if (error.response.data.statusCode === 400) {
                setErrorMessage('Houve um erro inesperado')
            }
            if (error.response.data.statusCode === 404) {
                setErrorMessage('Posição não encontrada')
            }
            if (error.response.data.statusCode === 403) {
                setErrorMessage('Saldo insuficiente')
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
                        <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={""} submit={submitBuy}></Form>
                        <br />
                        <SubmitButtonAtom onClick={handleClose} disabled={false} loading={false}>Cancelar</SubmitButtonAtom>
                    </DialogContent>
                </Dialog> : <ErrorModal open={showErrorModal} handleClose={handleCloseError}><b>{errorMessage}</b></ErrorModal>
            }
        </>
    )
}