import { LoadingButton } from '@mui/lab';

export const SubmitButtonAtom = ({ children, disabled, onClick, loading }: { children: string, disabled: boolean, onClick: () => void, loading: boolean }) => {

    return (
        <LoadingButton loading={loading} disabled={disabled} variant="contained" style={{ backgroundColor: '#00DAC0' }} onClick={() => onClick()}>{children}</LoadingButton>
    )
}