import Layout from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { Text } from '../components/General';
import styled from 'styled-components';
import Contact from '../components/Contact'
import { Row, Col } from "react-bootstrap";
import AutoContainer from "../components/AutoContainer";
import Banner from "../components/Banner";
import Services from "../components/Services";


const StyledText = styled(Text)`
    text-align: center;
    margin-bottom: 3em;
`


export default function AboutPage() {

    const aboutData = [
        {
            id: 1,
            title: 'Eclairage Public et Routiers',
            imgUrl: 'img/category-1.jpeg',
            description: `GMR ENLIGHTS propose une large sélection de luminaires et de poteaux à
           LED pour des applications fonctionnelles telles que les autoroutes et les routes interurbaines.
           Le haut niveau technologique des solutions optiques et mécaniques adoptées pour l’éclairage public
           et routier permet d’atteindre les résultats les plus performants, en termes d’économie d’énergie
           et de confort visuel,
           et de simplifier les opérations d’installation et d’entretien.`
        },
        {
            id: 5,
            title: 'Projecteurs',
            imgUrl: 'img/category-5.jpeg',
            description: `Les projecteurs à LED GMR ENLIGHTS sont des produits professionnels développés pour maximiser les performances mécaniques et l’efficacité de l’éclairage et pour répondre aux exigences les plus complexes en matière d’éclairage des grandes surfaces, des installations sportives et des contextes industriels intérieurs et extérieurs. Nous avons conçu une série de projecteurs en ACIER INOXYDABLE, spécialement conçus pour l’éclairage des tunnels, des galeries et des passages souterrains.`
        },
        {
            id: 2,
            title: 'Éclairage classique et décoratif',
            imgUrl: 'img/category-4.jpeg',
            description: `Les solutions d’éclairage classiques de GMR ENLIGHTS combinent le design élégant de la tradition avec la plus haute qualité mécanique et d’éclairage. Notre offre s’étend des lanternes et des luminaires décoratifs aux poteaux, crosses et bornes en fonte : des éléments pour l’éclairage LED des centres historiques des villes et pour la mise en valeur esthétique des zones de valeur. Une gamme de produits au design raffiné et élégant qui respecte les règles de composition et les canons décoratifs des candélabres historiques des principales villes italiennes.`
        },
        {
            id: 3,
            title: 'Projet personnalisé',
            imgUrl: 'img/category-3.jpeg',
            description: `GMR ENLIGHTS possède les connaissances techniques et l’expérience nécessaires pour développer, à partir de la conception, des objets ad hoc spécialement conçus pour des projets prestigieux.`
        },
        {
            id: 4,
            title: 'Kit Retrofit',
            imgUrl: 'img/category-2.jpeg',
            description: `GMR ENLIGHTS propose un kit de rénovation adaptable, pour remplacer 
            l’ancienne technologie à décharge par
             la technologie LED, en préservant l’esthétique du luminaire existant.`
        },
        {
            id: 6,
            title: 'Eclairage Urbain',
            imgUrl: 'img/category-6.jpeg',
            description: `GMR ENLIGHTS propose une large gamme de systèmes d’éclairage urbain à LED pour la mise en valeur et la décoration de l’espace urbain : luminaires et poteaux, bornes et totems, produits au design contemporain pouvant être intégrés dans les centres-villes modernes, pistes cyclables, les voies piétonnes, les passerelles et espaces verts.`
        }
    ]

    return (
        <>

            <Layout title="Qui sommes nous?">
                <Banner title="Fabricant D'éclairage" />
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
                <Services aboutData={aboutData} />
                <Contact />

            </Layout>

        </>
    )
}