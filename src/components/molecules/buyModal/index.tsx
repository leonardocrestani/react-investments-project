import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"
import { Form, FormField, ISubmitButton } from '../../molecules/form'
import { SubmitButtonAtom } from '../../atoms/submitButton'

export const BuyModal = ({ children, open, handleClose }: { children: string, open: boolean, handleClose: () => void }) => {

    const initialFormFields: FormField[] = [
        {
            value: '',
            label: 'Quantidade',
            name: 'quantidade',
            type: 'number'
        },
    ]

    const submitButton: ISubmitButton = {
        method: 'POST',
        label: 'Comprar',
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ paddingBottom: '0px' }}>{children}</DialogTitle>
            <DialogContent>
                <Form initialFormFields={initialFormFields} submitButton={submitButton} formTitle={""}></Form>
                <br />
                <SubmitButtonAtom onClick={handleClose} loading={false}>Cancelar</SubmitButtonAtom>
            </DialogContent>
        </Dialog>
    )
}