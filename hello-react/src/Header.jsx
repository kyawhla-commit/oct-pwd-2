import { AppBar, Badge, Toolbar, Typography, } from "@mui/material"
export default function Header( {count }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Badge
                    badgeContent={count}
                    color="error"
                >
                    <Typography>Todo</Typography>
                </Badge>
            </Toolbar>
        </AppBar>
    )

}      