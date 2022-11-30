import Button from "@mui/material/Button"

export const SubmitButtonAtom = ({ children, onClick }: { children: string, onClick: () => void }) => {

    return (
        <Button variant="outlined" onClick={() => onClick()}>{children}</Button>
    )
}