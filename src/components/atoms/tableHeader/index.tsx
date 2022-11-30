import { Grid } from "@mui/material"

export const TableHeaderAtom = ({ children }: { children: string }) => {

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center'>
            <Grid item xs={12} style={{ padding: '0px' }}>
                <h2>{children}</h2>
            </Grid>
        </Grid>
    )
}