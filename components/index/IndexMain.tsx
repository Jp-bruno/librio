import { Box, Typography, Grid } from '@mui/material';
import SocialMediaLinks from './SocialMediaLinks';
import IndexLoginButton from './IndexLoginButton';
import { useEffect, useState } from 'react';

const BoxMainStyles = {
    backgroundImage: 'url("/pexels-helena-lopes-2253275.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center top 20%',
    paddingTop: {
        xs: '250px',
        lg: '165px'
    },
    paddingBottom: '100px',
    paddingInline: '50px',
    width: '100%',
    height: {
        xs: 'fit-content',
        md: '100vh',
        lg: '100vh'
    }
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
    display: 'grid',
    placeItems: 'center'
}

export default function IndexMain() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(window.innerWidth);
        window.onresize = () => setWindowSize(window.innerWidth);
    }, [])

    if (windowSize > 1000) {
        return (
            <Box component='main' sx={BoxMainStyles}>
                <Grid container columns={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box sx={TypographyBoxStyles}>
                            <Typography variant='h3' mb={1} fontFamily='Inria Serif' component='p'>
                                Bem-vindo a
                            </Typography>
                            <Typography variant='h2' fontFamily='Inria Serif' component='h1'>
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
                        <Typography variant='h3' mb={1} fontFamily='Inria Serif' component='p'>
                            Bem-vindo a
                        </Typography>
                        <Typography variant='h2' fontFamily='Inria Serif' component='h1'>
                            Cão Carioca
                        </Typography>

                        <SocialMediaLinks />

                        <IndexLoginButton />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


