import { FormControl, Grid, InputLabel, NativeSelect } from "@mui/material"

export const TableHeaderAtom = ({ children }: { children: string }) => {

    return (
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent='center' style={{ marginBottom: '24px' }}>
            <Grid item xs={6} container justifyContent="left" style={{ padding: '0px', paddingLeft: '16px' }}>
                <h3>{children}</h3>
            </Grid>
            <Grid item xs={6} container justifyContent="right" style={{ padding: '0px', paddingRight: '16px' }}>
                <Grid item xs={2} container justifyContent="right" style={{ padding: '0px', paddingRight: '16px' }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Quantidade
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={5}>{5}</option>
                            <option value={10}>{10}</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={2} container justifyContent="right" style={{ padding: '0px', paddingRight: '16px' }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Página
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
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
                </Grid>
            </Grid>
        </Grid >
    )
}