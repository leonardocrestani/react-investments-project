import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Form, FormField, ISubmitButton } from '../../molecules/form'
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { orderApi } from "../../../services/order.service"
import { useUser } from "../../../contexts/userContext"

export const BuyModal = ({ children, open, handleClose }: { children: string, open: boolean, handleClose: () => void }) => {

    const { cpf } = useUser()

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
            const { data } = await orderApi.create(formPayload, cpf)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ paddingBottom: '0px' }}>{children}</DialogTitle>
            <DialogContent>
                <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={""} submit={submitBuy}></Form>
                <br />
                <SubmitButtonAtom onClick={handleClose} loading={false}>Cancelar</SubmitButtonAtom>
            </DialogContent>
        </Dialog>
    )
}