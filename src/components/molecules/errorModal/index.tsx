import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material"
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { ErrorAvatar } from '../../atoms/errorAvatar'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const ErrorModal = ({ children, open, handleClose }: { children: any, open: boolean, handleClose: () => void }) => {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'xs'}>
            <DialogTitle style={{ paddingBottom: '0px', textAlign: 'center' }}>{children}</DialogTitle>
            <DialogContent style={{ display: 'inline-block', textAlign: 'center' }}>
                <br />
                <ErrorAvatar><ErrorOutlineIcon style={{ height: 'auto', width: 'auto' }} fontSize="large" /></ErrorAvatar>
                <br />
                <SubmitButtonAtom onClick={handleClose} disabled={false} loading={false}>Ok</SubmitButtonAtom>
            </DialogContent>
        </Dialog>
    )
}