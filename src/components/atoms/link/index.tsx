import Link from "@mui/material/Link";

export const LinkAtom = ({ children, path }: { children: string, path: string }) => {
    return (
        <Link
            variant="body2"
            href={path}
            style={{ color: '#1681E6', textDecoration: 'none' }}
        >
            {children}
        </Link >
    )
}