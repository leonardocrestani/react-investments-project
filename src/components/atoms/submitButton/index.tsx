import { LoadingButton } from '@mui/lab';

export const SubmitButtonAtom = ({ children, onClick, loading }: { children: string, onClick: () => void, loading: boolean }) => {

    return (
        <LoadingButton loading={loading} variant="contained" style={{ backgroundColor: '#00DAC0' }} onClick={() => onClick()}>{children}</LoadingButton>
    )
}