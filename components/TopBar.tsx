import Image from 'next/image';
import { Toolbar, AppBar, Container, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuBasic from './TopBarMenu';
import useScreenSize from '../hooks/useScreenSize';
import { useState } from 'react';

const AppBarStyles = {
    paddingTop: '10px',
    paddingBottom: '10px',
    position: 'relative',
    backgroundColor: {
        xs: '#F7F7F7',
    }
}

const LogoGridItemStyles = {
    display: 'flex',
    justifyContent: {
        xs: 'center',
        md: 'start',
        lg: 'start'
    },
    marginBottom: {
        xs: '15px',
        md: '0px',
        lg: '0px',
    },
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
                        <Grid container columns={10}>
                            <Grid item xs={10} sm={10} md={2} lg={2} sx={LogoGridItemStyles}>
                                <Image src='/logo_cc.png' alt='logo' width='100' height='100' />
                            </Grid>
                            <Grid item xs={10} sm={10} md={8} lg={8}>
                                <MenuBasic isOpen={true} />
                            </Grid>
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
                    <Grid container columns={10}>
                        <Grid item xs={10} sm={10} md={10} lg='auto' sx={LogoGridItemStyles}>
                            <Image src='/cclogo_svg_main_with_dog.svg' alt='logo' width='131' height='57.5' />
                        </Grid>

                        <Grid item xs={10} sm={10} md={10} lg='auto'>
                            <MenuBasic isOpen={menuIsOpen} toggleMenu={toggleMenu} />
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