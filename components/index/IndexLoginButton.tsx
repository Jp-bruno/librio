import { Button } from "@mui/material";

const ButtonStyles = {
    padding: '10px 20px',
    transform: 'translateX(100px)'
}


export default function IndexLoginButton() {
    return (
        <Button sx={ButtonStyles} variant='contained'>
            Entrar 🐾
        </Button>
    )
}