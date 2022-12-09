import { FormControl, InputLabel, NativeSelect } from "@mui/material"

export const TableLimitField = ({ children, handleChange }: { children: string, handleChange: (arg: any) => void }) => {

    const handleSentValue = (event: any) => {
        event.preventDefault()
        handleChange({ limit: event.target.value })
    }

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {children}
            </InputLabel>
            <NativeSelect
                inputProps={{
                    id: 'uncontrolled-native',
                }}
                onChange={handleSentValue}
            >
                <option value={6}>{6}</option>
                <option value={10}>{10}</option>
                <option value={14}>{14}</option>
            </NativeSelect>
        </FormControl>
    )
}