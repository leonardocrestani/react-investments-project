import { Avatar } from "@mui/material"

export const ErrorAvatar = ({ children }: { children: any }) => {

    return (
        <Avatar sx={{ bgcolor: 'transparent', color: "#1681E6", margin: '0px', width: 'auto', height: 'auto' }}>
            {children}
        </Avatar>
    )
}