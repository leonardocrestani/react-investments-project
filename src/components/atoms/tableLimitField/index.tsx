import { FormControl, InputLabel, NativeSelect } from "@mui/material"

export const TableLimitField = ({ children }: { children: string }) => {

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {children}
                </InputLabel>
                <NativeSelect
                        defaultValue={30}
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