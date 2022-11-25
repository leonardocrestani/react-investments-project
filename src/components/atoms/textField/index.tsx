import TextField from "@mui/material/TextField"

export const TextFieldAtom = ({onChange, type, name, label} : {onChange: (name: string, value: string) => void, type: string, name: string, label: string}) => {
    return(
        <TextField id="standard-basic" label={label} variant="standard" required margin="normal" defaultValue='' onChange={(e) => onChange(name, e.target.value)} type={type}/>
    )
}