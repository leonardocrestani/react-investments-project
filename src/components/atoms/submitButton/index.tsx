import { LoadingButton } from '@mui/lab';

export const SubmitButtonAtom = ({ children, disabled, onClick, loading }: { children: string, disabled: boolean, onClick: () => void, loading: boolean }) => {

    return (
        <LoadingButton loading={loading} disabled={disabled} disableElevation={false} variant="contained" style={{ backgroundColor: '#1681E6' }} onClick={() => onClick()}>{children}</LoadingButton>
    )
}