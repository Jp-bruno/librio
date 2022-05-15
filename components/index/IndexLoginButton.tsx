import { Button, Box } from "@mui/material";
import { theme } from '../../styles/theme';

const BoxStyles = {
    position: 'relative',
    zIndex: '1',
    width: 'fit-content',
    marginLeft: {
        xs: '-200px',
        sm: '-100px',
        md: '0',
        lg: '0'
    },

    '.div': {
        backgroundColor: `${theme.palette.secondary.main}`,
        position: 'absolute',
        transform: 'translate(50%, -50%) scale(0)',
        transformOrigin: 'center',
        top: '50%',
        right: '-50%',
        width: '160px',
        height: '160px',
        borderRadius: '100px',
        transition: 'transform 1s ease'
    },

    '&:hover > .div': {
        transform: 'translate(50%, -50%) scale(1)'
    }
}

const ButtonStyles = {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    transform: 'translateX(100px)',
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
            <div className='div'></div>
        </Box>
    )
}