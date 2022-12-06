import { Grid } from "@mui/material"
import { TableTitle } from "../../atoms/tableTitle"
import { TableLimitField } from "../../atoms/tableLimitField"
import { TablePageField } from "../../atoms/tablePageField"

export const TableHeaderAtom = ({ children }: { children: string }) => {

    return (
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent='center' style={{ margin: '24px 0px' }}>
            <Grid item xs={6} container justifyContent="left" style={{ padding: '0px' }}>
                <TableTitle>{children}</TableTitle>
            </Grid>
            <Grid item xs={6} container justifyContent="right" style={{ padding: '0px', paddingRight: '16px' }}>
                <Grid item xs={2} container justifyContent="right" style={{ padding: '0px', paddingRight: '16px' }}>
                    <TableLimitField>Quantidade</TableLimitField>
                </Grid>
                <Grid item xs={2} container justifyContent="right" style={{ padding: '0px', paddingRight: '16px' }}>
                    <TablePageField>Página</TablePageField>
                </Grid>
            </Grid>
        </Grid >
    )
}