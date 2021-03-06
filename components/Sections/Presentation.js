import styled from 'styled-components'
import { DeviceSize } from '../Navbar/responsive'

import { useMediaQuery } from 'react-responsive'
import { Col, Container, Row } from 'react-bootstrap';

import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'




const PresentationSection = styled.section`
    position: relative;
    padding: ${props => props.isMobile ? '1em' : '54px 0'};
    margin: ${props => props.isMobile ? '0' : 'unset'};
    background: #000 !important;
`;

const Text = styled.div`
    position: relative;
    margin-bottom: 0;
    color: #fff;
    padding: ${props => props.isMobile ? '2em' : '4em'};

    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
    }
    h1.big {
        font-size: calc(38px + 1vw) !important;
        line-height: calc(39px + 1vw) !important;
        font-weight: lighter;
    }

    h1.verde {
        font-size: calc(38px + 1vw) !important;
        line-height: calc(39px + 1vw) !important;
        font-weight: 400;
        color: #cdd400;
    }
`;

const Paragraph = styled.div`
    position: relative;
    padding: 1em;
    color: #fff;
    p {
        font-weight: 400;
        padding-bottom: 1em;
    }
`;


const Presentation = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
    const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet})
    return (
        <>
            <PresentationSection isMobile={isMobile}>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <InView threshold={0.65}>
                                {({ ref, inView }) => (
                                    <motion.div ref={ref} initial={{ opacity: 0, x: isMobile || isTablet ? 0 : -50 }}
                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile || isTablet ? 0 : -50 }}
                                        transition={{ duration: isMobile || isTablet ? 0.1 : 0.8 }}>
                                        <Text isMobile={isMobile || isTablet}>
                                            <h1 className="big">
                                                Solution
                                                <br />
                                                d'??clairage
                                            </h1>
                                            <h1 className="verde">compl??te</h1>
                                        </Text>
                                    </motion.div>
                                )}
                            </InView>

                        </Col>
                        <Col sm={12} md={8}>
                            <InView threshold={0.65}>
                                {({ ref, inView }) => (
                                    <motion.div ref={ref} initial={{ opacity: 0, x: isMobile || isTablet ? 0 : 50 }}
                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile || isTablet ? 0 : 50 }}
                                        transition={{ duration: isMobile || isTablet ? 0.8 : 0.1 }}>
                                        <Paragraph>
                                            <p>Apr??s une longue histoire ?? succ??s, X change de nom pour marquer une nouvelle ??re: [] est n??.</p>
                                            <p>Une entreprise marocaine d'??clairage public avec une philosophie pr??cise: offrir ?? ses clients une gamme de solutions d'??clairage total avec des solutions adapt??es ?? toutes les applications.</p>
                                            <p>Au fil du temps, nous avons d??velopp?? une large gamme de produits d'??clairage historiques ou contemporains, adapt??s ?? tout contexte urbain, p??riurbain ou architectural, et nous proposons des produits pour le mobilier urbain au design moderne ou classique.</p>
                                            <p>Nous proposons une s??rie de solutions ?? haute valeur esth??tique et design, parfaitement combin??es avec la meilleure technologie LED qui a totalement chang?? la fa??on de penser et de concevoir l'??clairage.</p>
                                            <p>Nous nous sommes engag??s dans une ??voie verte?? et avons d??velopp?? une conscience environnementale visant ?? r??duire la consommation d'??nergie et les ??missions de CO2.</p>
                                            <p>*Contenu Exemple</p>
                                        </Paragraph>
                                    </motion.div>
                                )}
                            </InView>

                        </Col>
                    </Row>
                </Container>

            </PresentationSection>
        </>
    )
}

export default Presentation;