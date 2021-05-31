import EntryContent from "../components/EntryContent";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { Text } from '../components/General';
import styled from 'styled-components';
import Contact from '../components/Contact'
import { Row, Col } from "react-bootstrap";
import AutoContainer from "../components/AutoContainer";


const StyledText = styled(Text)`
    text-align: center;
    margin-bottom: 3em;
`


export default function AboutPage() {
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
                <Contact />

            </Layout>

        </>
    )
}