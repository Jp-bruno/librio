import { Button, Box } from "@mui/material";
import { theme } from '../../styles/theme';

const BoxStyles = {
    zIndex: '1',
    width: 'fit-content',

    marginTop: {
        xs: '40px',
        sm: '40px',
        md: '0',
        lg: '0' 
    },
}

const ButtonStyles = {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    backgroundImage: 'url("/paw_icon_green.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundRotation: '50deg',
    zIndex: '1',
}

export default function IndexLoginButton() {
    return (
        <Box sx={BoxStyles}>
            <Button sx={ButtonStyles} variant='contained' />
        </Box>
    )
}