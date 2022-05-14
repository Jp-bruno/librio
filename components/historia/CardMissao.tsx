import { Box, Grid, Typography } from "@mui/material";
import { theme } from '../../styles/theme';

type CardMissaoType = {
    titulo: string,
    texto: string | Array<string>,
    cor: string
}

const BoxStyles = {
    height: '100%',
    width: '100%',
    padding: '20px 0 20px',

    '&.azul': {
        background: `${theme.palette.primary.main}`
    },

    '&.marrom': {
        background: '#674640'
    },

    '&.verde': {
        background: `#92B649`
    }
}

const TypographyHeaderStyles = {
    textAlign: "center",
    fontFamily: 'Montserrat',
    fontWeight: '400',
    padding: '20px 0 10px',
    color: 'white',
    width: 'fit-content',
    marginInline: 'auto',
    position: 'relative',


    '&::before': {
        content: "''",
        width: '100%',
        height: '1px',
        background: 'white',
        position: 'absolute',
        bottom: '0',
        transform: 'scaleX(0.2)',
        transition: 'transform 0.5s ease',
    },

    '&:hover': {
        '&::before': {
            transform: 'scaleX(1)',
        }
    }
}

const TypographyParagraphStyles = {
    paddingInline: '2rem',
    marginTop: '10px',
    fontFamily: 'Montserrat',
    marginBottom: '35px',
    textAlign: 'justify',
    color: 'white',
    letterSpacing: '3px'
}

const UlStyles = {
    textAlign: 'center',
    color: 'white',
    padding: '0 30px',
    letterSpacing: '3px',
    fontSize: '1.1rem',
    listStyleType: 'none',

    '& li:not(li:first-of-type)': {
        marginTop: '20px'
    }
}

export default function CardMissao({ titulo, texto, cor }: CardMissaoType) {
    return (
        <Box sx={BoxStyles} className={cor}>
            <Grid container columns={1}>
                <Grid item xs={1}>
                    <Typography variant='h3' sx={TypographyHeaderStyles}>
                        {titulo}
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    {
                        typeof texto === 'string' ?
                            <Typography component='p' sx={TypographyParagraphStyles}>{texto}</Typography>
                            :
                            <Box component='ul' sx={UlStyles}>
                                {
                                    texto.map(el => {
                                        return <li key={Math.random() * 2000}>{el}</li>
                                    })
                                }
                            </Box>
                    }

                </Grid>
            </Grid>

        </Box>
    )
}