import { FormControl, InputLabel, NativeSelect } from "@mui/material"

export const TablePageField = ({ children, pages, handleChange }: { children: string, pages: number, handleChange: (arg: any) => void }) => {

    const options = []
    for (let i = 2; i <= pages; i++) {
        options.push(<option value={i}>{i}</option>)
    }

    const handleSentValue = (event: any) => {
        event.preventDefault()
        handleChange({ page: event.target.value })
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
                onChange={handleSentValue}
            >
                <option value={1}>{1}</option>
                {options.map(option => option)}
            </NativeSelect>
        </FormControl>
    )
}