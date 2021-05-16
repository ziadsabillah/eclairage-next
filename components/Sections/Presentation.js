import styled from 'styled-components'
import { DeviceSize } from '../Navbar/responsive'

import { useMediaQuery } from 'react-responsive'
import { Col, Container, Row } from 'react-bootstrap';


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
    const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet })
    return (
        <>
            <PresentationSection isMobile={isMobile}>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <Text isMobile={isMobile}>
                                <h1 className="big">
                                    Solution
                                    <br />
                                    d'éclairage
                                </h1>
                                <h1 className="verde">complète</h1>
                            </Text>
                        </Col>
                        <Col sm={12} md={8}>
                            <Paragraph>
                                <p>Après une longue histoire à succès, X change de nom pour marquer une nouvelle ère: [] est né.</p>
                                <p>Une entreprise marocaine d'éclairage public avec une philosophie précise: offrir à ses clients une gamme de solutions d'éclairage total avec des solutions adaptées à toutes les applications.</p>
                                <p>Au fil du temps, nous avons développé une large gamme de produits d'éclairage historiques ou contemporains, adaptés à tout contexte urbain, périurbain ou architectural, et nous proposons des produits pour le mobilier urbain au design moderne ou classique.</p>
                                <p>Nous proposons une série de solutions à haute valeur esthétique et design, parfaitement combinées avec la meilleure technologie LED qui a totalement changé la façon de penser et de concevoir l'éclairage.</p>
                                <p>Nous nous sommes engagés dans une «voie verte» et avons développé une conscience environnementale visant à réduire la consommation d'énergie et les émissions de CO2.</p>
                                <p>*Contenu Exemple</p>
                            </Paragraph>
                        </Col> 
                    </Row>
                </Container>

            </PresentationSection>
        </>
    )
}

export default Presentation;