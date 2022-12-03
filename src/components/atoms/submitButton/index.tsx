import { LoadingButton } from '@mui/lab';

export const SubmitButtonAtom = ({ children, onClick, loading }: { children: string, onClick: () => void, loading: boolean }) => {

    return (
        <LoadingButton loading={loading} variant="outlined" onClick={() => onClick()}>{children}</LoadingButton>
    )
}