import { FormControl, InputLabel, NativeSelect } from "@mui/material"

export const TablePageField = ({ children }: { children: string }) => {

    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Página
            </InputLabel>
            <NativeSelect
                defaultValue={30}
                inputProps={{
                    id: 'uncontrolled-native',
                }}
            >
                <option value={1}>{1}</option>
                <option value={2}>{2}</option>
                <option value={3}>{3}</option>
                <option value={4}>{4}</option>
                <option value={5}>{5}</option>
                <option value={6}>{6}</option>
            </NativeSelect>
        </FormControl>
    )
}