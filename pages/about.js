import EntryContent from "../components/EntryContent";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { Text } from '../components/General';
import styled from 'styled-components';
import Contact from '../components/Contact'
import { Row, Col, Container } from "react-bootstrap";
import AutoContainer from "../components/AutoContainer";
import AboutCard from "../components/CategoryCard/AboutCard";

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';


const StyledText = styled(Text)`
    text-align: center;
    margin-bottom: 3em;
`
const CardSection = styled.div`
    width: 100%;
    background-color: #000;
    z-index: -1999;
`;


export default function AboutPage() {

    const aboutData = [
        {
            id: 1,
            title: 'Eclairage Public et Routiers',
            imgUrl: 'img/showcase-1.jpeg',
            description: `GMR ENLIGHTS propose une large sélection de luminaires et de poteaux à
           LED pour des applications fonctionnelles telles que les autoroutes et les routes interurbaines.
           Le haut niveau technologique des solutions optiques et mécaniques adoptées pour l’éclairage public
           et routier permet d’atteindre les résultats les plus performants, en termes d’économie d’énergie
           et de confort visuel,
           et de simplifier les opérations d’installation et d’entretien.`
        },
        {
            id: 2,
            title: 'Eclairage Public et Routiers',
            imgUrl: 'img/showcase-1.jpeg',
            description: `GMR ENLIGHTS propose une large sélection de luminaires et de poteaux à
            LED pour des applications fonctionnelles telles que les autoroutes et les routes interurbaines.
            Le haut niveau technologique des solutions optiques et mécaniques adoptées pour l’éclairage public
            et routier permet d’atteindre les résultats les plus performants, en termes d’économie d’énergie
            et de confort visuel,
            et de simplifier les opérations d’installation et d’entretien.`
        },
        {
            id: 3,
            title: 'Eclairage Public et Routiers',
            imgUrl: 'img/showcase-1.jpeg',
            description: `GMR ENLIGHTS propose une large sélection de luminaires et de poteaux à
            LED pour des applications fonctionnelles telles que les autoroutes et les routes interurbaines.
            Le haut niveau technologique des solutions optiques et mécaniques adoptées pour l’éclairage public
            et routier permet d’atteindre les résultats les plus performants, en termes d’économie d’énergie
            et de confort visuel,
            et de simplifier les opérations d’installation et d’entretien.`
        },
        {
            id: 4,
            title: 'Eclairage Public et Routiers',
            imgUrl: 'img/showcase-1.jpeg',
            description: `GMR ENLIGHTS propose une large sélection de luminaires et de poteaux à
            LED pour des applications fonctionnelles telles que les autoroutes et les routes interurbaines.
            Le haut niveau technologique des solutions optiques et mécaniques adoptées pour l’éclairage public
            et routier permet d’atteindre les résultats les plus performants, en termes d’économie d’énergie
            et de confort visuel,
            et de simplifier les opérations d’installation et d’entretien.`
        }
    ]

    return (
        <>

            <Layout>
                <EntryContent title="Fabricant d'eclairage" videoUrl='https://www.youtube.com/embed/nsUGTCZU9aI' />
                <SectionHeader>
                    <h2>Fabricant italien d’éclairage public routier et urbain</h2>
                </SectionHeader>
                <StyledText>
                    GMR ENLIGHTS est un fabricant italien leader dans le secteur de l’éclairage
                    avec plus de 25 ans d’expérience dans l’éclairage public et le mobilier urbain.
                </StyledText>
                <AutoContainer>
                    <Row>
                        <Col md={6}>
                            <Text>
                                GMR ENLIGHTS propose une gamme complète de solutions à LED pour l’éclairage routier et urbain, la « Total Lighting Solution » (solution d’éclairage total), qui comprend des produits pour toutes les applications et tous les besoins d’installation : des luminaires routiers aux projecteurs, des poteaux au design moderne et contemporain à une collection historique de candélabres et de luminaires décoratifs pour l’éclairage classique.
                        </Text>
                        </Col>
                        <Col md={6}>
                            <Text>
                                Le meilleur design italien, les hautes performances d’éclairage et l’attention portée à la durabilité environnementale caractérisent chacun de nos produits ; le soin particulier apporté à la qualité de la construction garantit la durabilité et un faible entretien.
                            </Text>
                        </Col>
                    </Row>
                </AutoContainer>
                <InView threshold={0.25}>
                    {({ ref, inView }) => (
                        <motion.div ref={ref} initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8 }}>
                            <CardSection>

                                <Container>
                                    <Row>
                                        {aboutData?.map((card) => (

                                            <Col key={card.id} md={6} lg={6} sm={12}>
                                                <AboutCard title={card.title} imgUrl={card.imgUrl} description={card.description} />
                                            </Col>


                                        ))}
                                    </Row>
                                </Container>
                            </CardSection>
                        </motion.div>
                    )}
                </InView>

                <Contact />

            </Layout>

        </>
    )
}