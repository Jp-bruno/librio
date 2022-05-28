import Image from 'next/image';
import { Toolbar, AppBar, Container, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuBasic from './TopBarMenu';
import useScreenSize from '../hooks/useScreenSize';
import { useState } from 'react';
import { theme } from '../styles/theme';

const AppBarStyles = {
    backgroundImage: {
        xs: 'none',
        lg: 'url("/ipanema-sidewalk.jpg")',
    },
    paddingTop: '15px',
    paddingBottom: {
        xs: '0',
        sm: '0',
        md: '15px',
        lg: '15px'
    },
    position: 'relative',
    backgroundColor: {
        xs: 'white',
    }
}

const GridStyles = {
    justifyContent: 'space-between',
    alignItems: 'center',
}

const LogoGridItemStyles = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: {
        xs: 'none',
        lg: `${theme.palette.secondary.light}`
    },
    marginBottom: {
        xs: '15px',

    },
    paddingInline: '25px',
    borderRadius: '50%'
}

const MenuButtonStyles = {
    position: 'absolute',
    top: '25px'
}

export default function TopBar() {
    const windowSize = useScreenSize();
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen)
    }

    if (windowSize > 900) {
        return (
            <AppBar sx={AppBarStyles}>
                <Container disableGutters>
                    <Toolbar disableGutters>
                        <Grid container sx={GridStyles} columns={10}>
                            <Grid item xs={10} sm={10} md={10} lg='auto' sx={LogoGridItemStyles}>
                                <Image src='/cclogo_svg_main_with_dog.svg' alt='logo' width='262' height='115' />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <MenuBasic isOpen={true} />
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }

    return (
        <AppBar sx={AppBarStyles}>
            <Container disableGutters>
                <Toolbar disableGutters>
                    <Grid container sx={GridStyles} columns={10}>
                        <Grid item xs={10} sm={10} md={10} lg='auto' sx={LogoGridItemStyles}>
                            <Image src='/cclogo_svg_main_with_dog.svg' alt='logo' width='131' height='57.5' />
                        </Grid>

                        <Grid item xs={10} sm={10} md={10} lg='auto'>
                            <MenuBasic isOpen={menuIsOpen} toggleMenu={toggleMenu}/>
                        </Grid>
                    </Grid>
                </Toolbar>

                <Button sx={MenuButtonStyles} disableRipple onClick={toggleMenu}>
                    {menuIsOpen ? <CloseIcon /> : <MenuIcon />}
                </Button>
            </Container>
        </AppBar>
    )
}