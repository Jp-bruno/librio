import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

const GridStyles = {
    width: {
        xs: '70%',
        md: 'fit-content',
        lg: 'fit-content'
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
    marginBottom: '0'
}

const GridItemStyles = {
    width: 'auto'
}

const IconStyles = {
    color: {
        xs: 'rgba(0,0,0,0.7)',
        sm: 'rgba(0,0,0,0.7)',
        md: 'white',
        lg: 'white',
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
            <Grid container columns={6} sx={GridStyles}  >
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