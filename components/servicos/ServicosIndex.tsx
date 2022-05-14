import { Box, Grid } from "@mui/material";
import ServicoCard from "./ServicoCard";
import { CardsData } from '../../cardsData/CardsData';

const BoxMainStyles = {
    backgroundImage: 'url("pexels-alice-castro-1870301.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center top 60%',
    backgroundAttachment: 'fixed',
    paddingTop: {
        xs: '300px',
        lg: '165px'
    },
    paddingBottom: '155px',
    paddingInline: '50px',
    width: '100%',
    height: 'fit-content'
}

const GridContainerStyles = {
    justifyContent: 'center',
    justifyItems: 'space-between',
    padding: '20px 0',
    alignItems: 'center'
}

const GridItemsColumns = {
    xs: 12,
    md: 12,
    lg: 4
}

export default function ServicosIndex() {
    return (
        <Box component='main' sx={BoxMainStyles}>
            <Grid container columns={12} rowGap={5} sx={GridContainerStyles}>
                {
                    CardsData.map(({ titulo, lista, texto }) => {
                        return (
                            <Grid item key={Math.random() * 1999} {...GridItemsColumns}>
                                <ServicoCard titulo={titulo} lista={lista} texto={texto} key={Math.random() * 1090} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}