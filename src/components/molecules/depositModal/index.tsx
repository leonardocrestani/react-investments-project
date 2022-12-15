import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Form, FormField, ISubmitButton } from '../../molecules/form'
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { transactionApi } from "../../../services/transaction.service"
import { useUser } from "../../../contexts/userContext"
import { strip } from "@fnando/cpf"

export const DepositModal = ({ children, open, handleClose }: { children: string, open: boolean, handleClose: () => void }) => {

    const { cpf } = useUser()

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
        const payload = Object.assign(formPayload, { event: "TRANSFER", document: strip(cpf) })
        payload.amount = parseFloat(payload.amount)
        try {
            const { data } = await transactionApi.create(payload)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ paddingBottom: '0px' }}>{children}</DialogTitle>
            <DialogContent>
                <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={""} submit={submitDeposit}></Form>
                <br />
                <SubmitButtonAtom onClick={handleClose} loading={false}>Cancelar</SubmitButtonAtom>
            </DialogContent>
        </Dialog>
    )
}