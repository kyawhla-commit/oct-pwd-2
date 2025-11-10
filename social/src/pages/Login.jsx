import { Box, Button, OutlinedInput, Typography } from "@mui/material";

export default function Login() {
    return <Box>
        <Typography variant="h3" sx={{ mb: 4}}>Login</Typography>
        <form >
            <OutlinedInput fullWidth placeholder="username" sx={{mb: 2}}></OutlinedInput>
            <OutlinedInput fullWidth type="password" placeholder="password" sx={{mb: 2}}></OutlinedInput>
            <Button fullWidth variant="contained">Login</Button>
        </form>
    </Box>
}