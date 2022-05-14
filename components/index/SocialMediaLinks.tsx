import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

const GridStyles = {
    width: 'max-content',
    justifyContent: 'space-between',
    columnGap: '10px',
    marginTop: '20px'
}

const IconStyles = {
    color: 'white',
    cursor: 'pointer'
}

export default function SocialMediaLinks() {
    return (
        <>
            <Grid container columns={6} sx={GridStyles}  >
                <Grid xs={1} item key={Math.random() * 1000}>
                    <Facebook sx={IconStyles} />
                </Grid>

                <Grid xs={1} item key={Math.random() * 1000}>
                    <Instagram sx={IconStyles} />
                </Grid>

                <Grid xs={1} item key={Math.random() * 1000}>
                    <WhatsApp sx={IconStyles} />
                </Grid>
            </Grid>
        </>
    )
}