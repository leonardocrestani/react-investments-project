import Button from "@mui/material/Button"

export const ButtonAtom = ({ children, onClick }: { children: string, onClick: () => void }) => {
    return (
        <Button variant="outlined" onClick={() => onClick()}>{children}</Button>
    )
}