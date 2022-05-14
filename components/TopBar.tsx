import Image from 'next/image';
import { Toolbar, AppBar, Container, Grid } from '@mui/material';
import MenuBasic from './TopBarMenu';
import { useRouter } from 'next/router';

const AppBarStyles = {
    background: 'linear-gradient(178.51deg, rgba(0, 0, 0, 0.7) 1.27%, rgba(0, 0, 0, 0) 98.73%);',
    paddingTop: '15px',
    paddingBottom: '15px',
    position: 'absolute'
}

const GridStyles = {
    justifyContent: 'space-between',
    alignItems: 'center',
}


const LogoGridItemStyles = {
    display: 'flex',
    justifyContent: 'center'
}

export default function TopBar() {
    const router = useRouter();

    return (
        <AppBar sx={AppBarStyles} >
            <Container disableGutters>
                <Toolbar disableGutters>
                    <Grid container sx={GridStyles} columns={10}>
                        <Grid item xs={10} sm={10} md={10} lg='auto' sx={LogoGridItemStyles}>
                            <Image src='/cclogo_svg_main_with_dog.svg' alt='logo' width='262' height='115' />
                        </Grid>

                        <Grid item xs={10} sm={10} md={10} lg='auto'>
                            <MenuBasic />
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}