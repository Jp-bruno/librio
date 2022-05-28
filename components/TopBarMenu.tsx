import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScreenSize from '../hooks/useScreenSize';

const ButtonsBoxStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: '20px',
    transition: 'transform 0.2s ease, height 0.2s ease',
    transformOrigin: 'top',
    padding: {
        xs: '0',
        sm: '0',
        md: '20px',
        lg: '20px'
    },
    borderRadius: {
        xs: '0',
        sm: '0',
        md: '8px',
        lg: '8px'
    },
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: {
        xs: '100%',
        sm: '100%',
        md: '80%',
        lg: 'max-content'
    },
    marginInline: 'auto',
    flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row'
    },
    '&.closed': {
        height: '0px',
        transform: 'scaleY(0)'
    },
    '&.open': {
        height: '109px',
        transform: 'scaleY(1)'
    }
}

const ButtonsStyles = {
    textTransform: 'none',
    borderRadius: {
        xs: '0',
        sm: '0',
        md: '8px',
        lg: '8px'
    },

    '&.MuiButton-contained': {
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    }
}

const HomeButtonStyles = {
    ...ButtonsStyles,

    '&.MuiButton-contained': {
        backgroundColor: 'brown',
        '&:hover': {
            backgroundColor: 'white',
            color: 'brown'
        }
    }
}

type MenuType = {
    isOpen?: Boolean,
    toggleMenu?: any
}

export default function MenuBasic({isOpen, toggleMenu}:MenuType) {
    const router = useRouter();
    const windowSize = useScreenSize();

    if (windowSize > 900) {
        return (
            <Box sx={ButtonsBoxStyles}>
                <Link href='/'>
                    <Button variant='contained' sx={HomeButtonStyles} endIcon={'🐕‍🦺'}>
                        Início
                    </Button>
                </Link>
    
                <Link href='/servicos'>
                    <Button variant='contained' sx={ButtonsStyles} endIcon={'🐾'}>
                        Nossos serviços
                    </Button>
                </Link>
    
                <Link href='/historia'>
                    <Button variant='contained' sx={ButtonsStyles} color={'secondary'} endIcon={'🐶'}>
                        Nossa história
                    </Button>
                </Link>
            </Box>
        )
    }

    return (
        <Box sx={ButtonsBoxStyles} className={isOpen ? 'open' : 'closed'}>
            <Link href='/'>
                <Button variant='contained' sx={HomeButtonStyles} endIcon={'🐕‍🦺'} onClick={toggleMenu}>
                    Início
                </Button>
            </Link>


            <Link href='/servicos'>
                <Button variant='contained' sx={ButtonsStyles} endIcon={'🐾'} onClick={toggleMenu}>
                    Nossos serviços
                </Button>
            </Link>

            <Link href='/historia'>
                <Button variant='contained' sx={ButtonsStyles} color={'secondary'} endIcon={'🐶'} onClick={toggleMenu}>
                    Nossa história
                </Button>
            </Link>
        </Box>
    )
}