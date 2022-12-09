import Link from "@mui/material/Link";

export const LinkAtom = ({ children, path }: { children: string, path: string }) => {
    return (
        <Link
            variant="body2"
            href={path}
            style={{ color: '#00E2CA', textDecoration: 'none' }}
        >
            {children}
        </Link >
    )
}