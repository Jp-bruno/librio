import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

const GridStyles = {
    width: {
        xs: '70%',
        md: '50%',
        lg: '50%'
    },
    justifyContent: 'space-between',
    marginTop: '30px',
    marginLeft: {
        xs: 'auto',
        sm: 'auto',
        md: 'auto',
        lg: '0'
    },
    marginRight: {
        xs: 'auto',
        sm: 'auto',
        md: 'auto',
        lg: '0'
    },
    marginBottom: '0',
}

const GridItemStyles = {
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center'
}

const IconStyles = {
    color: {
        xs: 'rgba(0,0,0,0.7)',
        sm: 'rgba(0,0,0,0.7)',
        md: '#3D3D3D',
        lg: '#3D3D3D',
    },
    cursor: 'pointer',
    width: {
        xs: '100%',
        md: 'fit-content',
        lg: 'fit-content'
    },

}

export default function SocialMediaLinks() {
    return (
        <>
            <Grid container columns={6} sx={GridStyles} >
                <Grid xs={1} item sx={GridItemStyles} key={Math.random() * 1000}>
                    <Facebook sx={IconStyles} />
                </Grid>

                <Grid xs={1} item sx={GridItemStyles} key={Math.random() * 1000}>
                    <Instagram sx={IconStyles} />
                </Grid>

                <Grid xs={1} item sx={GridItemStyles} key={Math.random() * 1000}>
                    <WhatsApp sx={IconStyles} />
                </Grid>
            </Grid>
        </>
    )
}