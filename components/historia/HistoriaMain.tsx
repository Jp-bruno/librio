import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Pets } from '@mui/icons-material';
import CardMissao from "./CardMissao";

const MainBoxStyles = {
    backgroundImage: 'url("/pexels-sebastian-coman-travel-3631659.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom 100%',
    backgroundAttachment: 'fixed',
    paddingTop: {
        xs: '260px',
        lg: '165px'
    },
    paddingBottom: '155px',
    paddingInline: '50px',
    width: '100%',
    height: 'fit-content'
}

const Container_1_Styles = {
    marginTop: '50px',
    borderRadius: '3px',
    backgroundColor: '#ffffffcf',
    paddingTop: '20px',
    paddingBottom: '30px',
}

const Container_2_Styles = {
    marginTop: '50px',

    '.griddd': {
        minHeight: {
            xs: '500px',
            sm: '500px',
            md: '500px',
            lg: '500px'
        }
    }
}

const GridContainer_1_Styles = {
    fontFamily: 'Montserrat',
    color: '#00000099',
    borderBottom: 'solid 1px black',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const TextGridStyles = {
    padding: '10px 15px',
    borderRadius: '5px',
    background: 'white',
    color: '#7B7B7B',
    lineHeight: '150%'
}


export default function HistoriaMain() {
    return (
        <Box component='main' sx={MainBoxStyles}>
            <Container sx={Container_1_Styles}>
                <Grid container columns={12} sx={GridContainer_1_Styles}>
                    <Grid item xs={'auto'}>
                        <Typography variant='h4' component='h4' >
                            Sobre nós
                        </Typography>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Pets />
                    </Grid>
                </Grid>


                <Grid container columns={12} columnGap={2} justifyContent='space-between' mt={2} textAlign='justify'>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={TextGridStyles}>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;Desde criança sempre tivemos cães como nossos melhores amigos e companheiros. Tivemos Vira-latas, Pastores, Labradores, e mais Vira-latas, sempre como membros de nossa família. Já grandes, percebemos que queríamos dedicar nossas vidas para criar serviços que pudessem ajudar nossos cães urbanos a viver melhor, com mais saúde, felicidade e bem-estar, apesar de todas as dificuldades e frustrações que nossos amigos enfrentam com a vida urbana. Foi com esse desejo que começamos a nos planejar e especializar na área de cuidados caninos, nos melhores centros de ensino, até que em 2016 decidimos lançar os serviços do Cão Carioca.
                        </p>

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;O serviço foi lançado inicialmente nos bairros centrais do Rio de Janeiro, mas devido a alta qualidade do serviço, se espalhou rapidamente por todos os cantos da cidade. Em menos de 6 anos de trabalho, o Cão Carioca se tornou a maior e mais bem avaliada organização de cuidadores de cães no Rio de Janeiro, atendendo mais de 300 cães por mês, e contando com um grupo robusto de mais de 50 cuidadores profissionais filiados a rede.
                        </p>

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;Desde então, foram criados 4 novos departamentos – Hospedagem Canina Humanizada, Banho e Tosa Residencial, Veterinário Residencial e Taxi Dog Humanizado), além de uma organização de trabalho moderna, com procedimentos, manuais, organização do trabalho, código de ética e conduta, e muito mais, para seguir evoluindo e atendendo a todos os clientes com o mesmo toque VIP, marca registrada do Cão Carioca!
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={12} md={'auto'} lg={'auto'} mt={{xs: 5, sm: 5, md: 0, lg: 0}}>
                        <Image width='490' height='326.5' layout='intrinsic' src='/ccfoto.webp' alt='dog' />
                    </Grid>
                </Grid>
            </Container>

            <Container sx={Container_2_Styles} disableGutters>
                <Grid container columns={3}>
                    <Grid item xs={3} sm={3} md={1} lg={1} className='griddd'>
                        <CardMissao cor='azul' titulo='Missão' texto='Tornar a convivência urbana entre o nós e nossos melhores amigos caninos, a mais saudável e feliz possível para eles, retribuindo todo o carinho, amizade e proteção que eles nos proporcionam incondicionalmente, nos baseando em empatia, carinho e amor, mas indo muito além, e utilizando informações científicas e melhores práticas em cuidados caninos urbanos modernos.' />
                    </Grid>

                    <Grid item xs={3} sm={3} md={1} lg={1} className='griddd'>
                        <CardMissao cor='marrom' titulo='Visão' texto='Ser referência em serviços especializados de cuidados caninos nos grandes centros urbanos.' />
                    </Grid>

                    <Grid item xs={3} sm={3} md={1} lg={1} className='griddd'>
                        <CardMissao cor='verde' titulo='Valores' texto={['Segurança no trabalho', 'Especialização constante', 'Alto nível de qualidade nos serviços', 'Uso da tecnologia em favor dos cães', 'Colaboração constante entre rede e clientes', 'Inovação e Criatividade', 'Visão de Longo Prazo']} />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}