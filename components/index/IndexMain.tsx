import { Box, Typography, Grid, Paper } from '@mui/material';
import SocialMediaLinks from './SocialMediaLinks';
import IndexLoginButton from './IndexLoginButton';
import useScreenSize from '../../hooks/useScreenSize';
import Image from 'next/image';
import { theme } from '../../styles/theme';

const BoxMainStyles = {
    backgroundImage: 'url("/ipanema2.png")',
    backgroundAttachment: 'fixed',
    backgroundColor: '#F7F7F7',
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
        md: '#3D3D3D',
        lg: '#3D3D3D',
    },
    width: {
        xs: '100%',
    },
    padding: '50px 20px 60px',
    // backgroundColor: `${theme.palette.secondary.main}`,
    backgroundColor: '#F7F7F7',
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
    height: {
        xs: 'fit-content',
        lg: '304px'
    },
}

const SecondBoxStyles = {
    backgroundColor: `${theme.palette.primary.main}`,
    width: '100%',
    position: 'relative',
}

export default function IndexMain() {
    const windowSize = useScreenSize();

    if (windowSize > 1000) {
        return (
            <Box component='main' sx={BoxMainStyles}>
                <Grid container columns={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper sx={TypographyBoxStyles} elevation={9}>
                            <Typography variant='h3' mb={1} fontFamily='Josefin Slab' fontWeight={200} component='p'>
                                Bem-vindo a
                            </Typography>
                            <Typography variant='h2' fontFamily='Josefin Slab' fontWeight={200} component='h1'>
                                Cão Carioca
                            </Typography>
                            <SocialMediaLinks />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} /*display='flex' alignItems='center' justifyContent='center'*/>
                        {/* <IndexLoginButton /> */}
                        <Box sx={SecondBoxStyles}>
                            
                        </Box>
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


