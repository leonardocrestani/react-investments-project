import { FormControl, InputLabel, NativeSelect } from "@mui/material"

export const TableLimitField = ({ children, limit }: { children: string, limit: number }) => {

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {children}
            </InputLabel>
            <NativeSelect
                inputProps={{
                    id: 'uncontrolled-native',
                }}
            >
                <option value={5}>{5}</option>
                <option value={10}>{10}</option>
            </NativeSelect>
        </FormControl>
    )
}