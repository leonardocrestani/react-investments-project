import Link from "@mui/material/Link";

export const LinkAtom = ({children} : {children: string}) => {
    return(
        <Link
            component="button"
            variant="body2"
            onClick={() => {
                
            }}
            >
            {children}
        </Link>
    )
}