import { Box, Button, Typography, Paper } from "@mui/material";
import { theme } from '../../styles/theme';

type ServicoCardProps = {
    titulo: string,
    lista: Array<string>,
    texto: string
}

const ServicoMainBoxStyles = {
    padding: '10px 20px 20px',
    borderRadius: '10px',
    marginInline: 'auto',
    backgroundColor: `${theme.palette.primary.main}`,
    width: {
        xs: '100%',
        md: '95%',
        lg: '95%'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
}

const TypographyHeaderStyles = {
    fontSize: {
        xs: '1.9rem',
        lg: '2.3rem'
    },
    padding: '30px 30px 10px',
    color: 'white',
    textTransform: 'lowercase',
    borderRadius: '8px',
    fontFamily: 'Josefin Slab',
    fontWeight: '500',
    textAlign: 'center',
    // textDecoration: 'underline',
    // lineHeight: '110%',

    '&:first-letter': {
        textTransform: 'capitalize'
    }
}

const UlStyles = {
    listStyleType: 'none',
    fontSize: '1rem',
    textAlign: 'center',
    padding: '0',

    'li': {
        '&:not(li:first-of-type)': {
            marginTop: '20px'
        },
        color: '#ffffffc9'
    }
}

const TypographyPStyles = {
    textAlign: 'center',
    marginBottom: '20px',
    marginTop: '20px',
    fontFamily: 'Montserrat',
    letterSpacing: '2px',
    width: 'fit-content'
}

const ButtonStyles = {
    marginTop: '20px',
    padding: '10px 0',
    transition: 'padding 0.3s ease, background-color 0.3s ease',
    fontWeight: '500',
    color: 'white',
    letterSpacing: '2px',
    backgroundColor: `${theme.palette.secondary.dark}`,

    '&:hover': {
        backgroundColor: `${theme.palette.secondary.main}`,
    }
}

export default function ServicoCard({ titulo, lista, texto }: ServicoCardProps) {
    return (
        <Paper sx={ServicoMainBoxStyles} elevation={15}>
            <Typography variant='h2' component='h2' sx={TypographyHeaderStyles}>
                {titulo}
            </Typography>

            <Typography color='rgba(255,255,255,0.8)' sx={TypographyPStyles}>
                {texto}
            </Typography>

            <Box component='ul' sx={UlStyles}>
                {
                    lista.map(el => {
                        return (
                            <li key={Math.random() * 100}>
                                {el}
                            </li>
                        )
                    })
                }
            </Box>

            <Button variant='contained' fullWidth sx={ButtonStyles}>
                Saiba mais
            </Button>
        </Paper>
    )
}