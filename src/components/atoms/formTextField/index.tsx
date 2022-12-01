import TextField from "@mui/material/TextField"

export const FormTextFieldAtom = ({ onChange, type, name, label }: { onChange: (name: string, value: string) => void, type: string, name: string, label: string }) => {
    return (
        <TextField id="outlined-basic" label={label} variant="outlined" required margin="normal" defaultValue='' onChange={(e) => onChange(name, e.target.value)} type={type} />
    )
}