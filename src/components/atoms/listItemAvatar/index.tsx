import { Avatar, ListItemAvatar } from "@mui/material"

export const ListItemAvatarAtom = ({ children }: { children: any }) => {

    return (
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'transparent', color: "#2A2929" }}>
                {children}
            </Avatar>
        </ListItemAvatar>
    )
}