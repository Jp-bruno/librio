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
        xs: '1.4rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '2rem'
    },
    padding: '10px 30px',
    color: 'white',
    textTransform: 'lowercase',
    borderRadius: '8px',
    fontFamily: 'Montserrat !important',
    textAlign: 'center',
    // textDecoration: 'underline',
    // lineHeight: '110%',

    '&:first-letter': {
        textTransform: 'capitalize'
    }
}

const UlStyles = {
    listStyleType: 'none',
    fontSize: '1.2rem',
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
    paddingInline: '20px',
    textAlign: 'center',
    marginBottom: '20px',
    marginTop: '20px',
    fontFamily: 'Montserrat',
    letterSpacing: '2px'
}

const ButtonStyles = {
    marginTop: '20px',
    padding: '10px 0',
    transition: 'padding 0.3s ease, background-color 0.3s ease',
    fontWeight: '500',
    color: 'white',
    letterSpacing: '2px',
    backgroundColor: 'brown',

    '&:hover': {
        backgroundColor: '#ffffff',
        color: 'brown'
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