import Link from 'next/link';
import { Button } from '@mui/material';
import Image from 'next/image';


const ButtonStyles = {

    textTransform: 'none',
    fontFamily: 'monospace',

    '&.MuiButton-contained': {
        backgroundColor: 'brown',
        '&:hover': {
            backgroundColor: 'white',
            color: 'brown'
        }
    }
}

export default function HomeButton() {
    return (
        <Link href='/'>
            <Button sx={ButtonStyles} variant='contained' value={1} endIcon={'🐕‍🦺'}>
                Início
            </Button>
        </Link>
    )
}