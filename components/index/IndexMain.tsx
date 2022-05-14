import { Box, Typography } from '@mui/material';
import SocialMediaLinks from './SocialMediaLinks';

const BoxMainStyles = {
    backgroundImage: 'url("/pexels-helena-lopes-2253275.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center top 20%',
    paddingTop: {
        xs: '250px',
        lg: '165px'
    },
    paddingInline: '50px',
    width: '100%',
    height: '100vh'
}

const TypographyBoxStyles = {
    color: 'rgb(233,233,233)',
    fontFamily: 'Inria Serif',
    width: {
        xs: '100%',
        sm: '100%',
        md: 'fit-content',
        lg: 'fit-content',
    },
    padding: '50px 20px 60px',
    backgroundImage: { 
        xs: 'linear-gradient(#4C5288, #4C5288)',
        sm: 'linear-gradient(#4C5288, #4C5288)',
        md: 'linear-gradient(101.97deg, #4C5288 0%, rgba(76, 82, 136, 0) 90.05%)',
        lg: 'linear-gradient(101.97deg, #4C5288 0%, rgba(76, 82, 136, 0) 90.05%)',
    },
    borderRadius: '10px',
    marginTop: '50px',
    textAlign: {
        xs: 'center',
        sm: 'center',
        md: 'left',
        lg: 'left',
    },
}

export default function IndexMain() {
    return (
        <Box component='main' sx={BoxMainStyles}>
            <Box sx={TypographyBoxStyles}>
                <Typography variant='h3' mb={1} fontFamily='Inria Serif' component='p'>
                    Bem-vindo a
                </Typography>
                <Typography variant='h2' fontFamily='Inria Serif' component='h1'>
                    Cão Carioca
                </Typography>
            </Box>

            <SocialMediaLinks />
        </Box>
    )
}


