import { FormControl, InputLabel, NativeSelect } from "@mui/material"

export const TablePageField = ({ children, pages }: { children: string, pages: number }) => {

    const options = []
    for (let i = 2; i <= pages; i++) {
        options.push(<option value={i}>{i}</option>)
    }

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Página
            </InputLabel>
            <NativeSelect
                inputProps={{
                    id: 'uncontrolled-native',
                }}
            >
                <option value={1}>{1}</option>
                {options.map(option => option)}
            </NativeSelect>
        </FormControl>
    )
}