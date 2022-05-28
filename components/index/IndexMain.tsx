import { Box, Typography, Grid } from '@mui/material';
import SocialMediaLinks from './SocialMediaLinks';
import IndexLoginButton from './IndexLoginButton';
import useScreenSize from '../../hooks/useScreenSize';
import Image from 'next/image';
import { theme } from '../../styles/theme';

const BoxMainStyles = {
    backgroundImage: 'url("/pexels-helena-lopes-2253275.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center top 60%',
    paddingBottom: '100px',
    paddingInline: {
        xs: '0px',
        sm: '0px',
        lg: '70px'
    },
    paddingTop: {
        xs: '0px',
        sm: '0px',
        md: '100px',
        lg: '100px',
    },
    width: '100%',
    height: {
        xs: 'auto',
        sm: 'auto',
        md: '100vh',
        lg: '100vh',
    },
}

const TypographyBoxStyles = {
    color: {
        xs: 'rgba(0,0,0,0.8)',
        sm: 'rgba(0,0,0,0.8)',
        md: 'white',
        lg: 'white',
    },
    width: {
        xs: '100%',
        sm: '100%',
        md: 'fit-content',
        lg: 'fit-content',
    },
    padding: '50px 20px 60px',
    backgroundImage: {
        xs: 'none',
        sm: 'none',
        md: 'linear-gradient(101.97deg, #4C5288 0%, rgba(76, 82, 136, 0) 90.05%)',
        lg: 'linear-gradient(101.97deg, #4C5288 0%, rgba(76, 82, 136, 0) 90.05%)',
    },
    backgroundColor: {
        xs: 'rgba(255,255,255,0.7)',
        sm: 'rgba(255,255,255,0.7)',
        md: 'rgba(0,0,0,0)',
        lg: 'rgba(0,0,0,0)',
    },
    backdropFilter: 'blur(6px)',
    borderRadius: {
        xs: '0',
        sm: '0',
        md: '10px',
        lg: '10px'
    },
    marginTop: '30px',
    textAlign: {
        xs: 'center',
        sm: 'center',
        md: 'left',
        lg: 'left',
    },
    display: 'grid',
    placeItems: {
        xs: 'center',
        sm: 'center',
        md: 'left',
        lg: 'left',
    },
    height: 'fit-content',
}

export default function IndexMain() {
    const windowSize = useScreenSize();

    if (windowSize > 1000) {
        return (
            <Box component='main' sx={BoxMainStyles}>
                <Grid container columns={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box sx={TypographyBoxStyles}>
                            <Typography variant='h3' mb={1} fontFamily='Josefin Slab' fontWeight={200} component='p'>
                                Bem-vindo a
                            </Typography>
                            <Typography variant='h2' fontFamily='Josefin Slab' fontWeight={200} component='h1'>
                                Cão Carioca
                            </Typography>
                        </Box>

                        <SocialMediaLinks />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} display='flex' alignItems='center' justifyContent='center'>
                        <IndexLoginButton />
                    </Grid>
                </Grid>
            </Box>
        )
    }

    return (
        <Box component='main' sx={BoxMainStyles}>
            <Grid container columns={12}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={TypographyBoxStyles}>
                        <Typography variant='h3' mb={1} fontFamily='Josefin Slab' fontWeight={200} component='p'>
                            Bem-vindo
                        </Typography>

                        <Image src='/cclogo_svg_main_with_dog.svg' alt='logo' width='262' height='115' />

                        <IndexLoginButton />

                        <SocialMediaLinks />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


