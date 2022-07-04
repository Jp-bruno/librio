import { Box, Grid } from "@mui/material";
import ServicoCard from "./ServicoCard";
import { CardsData } from '../../cardsData/CardsData';

const BoxMainStyles = {
    backgroundImage: 'url("/ipanema2.png")',
    backgroundAttachment: 'fixed',
    paddingTop: {
        lg: '65px'
    },
    paddingBottom: '155px',
    width: '100%',
    height: 'fit-content',
    paddingInline: {
        xs: '10px'
    }
}

const GridContainerStyles = {
    alignItems: 'center',
    padding: '20px 0',
}

const GridItemsColumns = {
    xs: 12,
    md: 12,
    lg: 4
}

export default function ServicosIndex() {
    return (
        <Box component='main' sx={BoxMainStyles}>
            <Grid container columns={12} rowGap={2} sx={GridContainerStyles}>
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