import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeButton from './HomeButton';

const ButtonsBoxStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: '20px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: {
        xs: '80%',
        sm: '80%',
        md: '80%',
        lg: 'auto'
    },
    marginInline: 'auto',
    flexDirection: {
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row'
    }
}

const ButtonsStyles = {
    fontFamily: 'Inconsolata, monospace',
    textTransform: 'none',

    '&.MuiButton-contained': {
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    }
}

export default function MenuBasic() {
    const router = useRouter();
    
    return (
        <Box sx={ButtonsBoxStyles}>
            {
                router.pathname === '/' ?
                    null
                    :
                    <>
                        <HomeButton />
                    </>
            }

            <Link href='/servicos'>
                <Button variant='contained' sx={ButtonsStyles}>
                    Nossos serviços 🐾
                </Button>
            </Link>

            <Link href='/historia'>
                <Button variant='contained' sx={ButtonsStyles} color={'secondary'}>
                    Nossa história 🐶
                </Button>
            </Link>
        </Box>
    )
}