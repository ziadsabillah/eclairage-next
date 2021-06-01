import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Banner from '../components/Banner'
import AdvantagesCard from '../components/CategoryCard/AdvantagesCard'
import Layout from '../components/Layout'



const CustomRow = styled(Row)`
    width: 100%;

`;

export default function AdvantagesPage() {

    const advantages = [
        {
            id: 1,
            title: "Accessibilité des produits",
            imgUrl: "/img/access.jpeg",
            description: `Les produits GMR ENLIGHTS ont été développés pour faciliter l’accessibilité et l’entretien.
            La plupart des luminaires peuvent être ouverts et leurs composants internes remplacés sans l’aide d’outils.
            Dans certains cas, afin de ne pas compromettre la conception du produit ou pour garantir la meilleure solution technique, des solutions d’accessibilité spécifiques ont été développées.`
        },
        {
            id: 2,
            title: "Technologies optiques",
            imgUrl: "/img/optic.jpeg",
            description: `GMR ENLIGHTS dispose d’un savoir-faire technique complet qui lui a permis de concevoir et de développer différentes technologies optiques pour les luminaires à LED.
            Chaque système optique présente des particularités et des avantages spécifiques.
            Le choix du meilleur système optique disponible est déterminé en fonction de la conception de l’éclairage, de l’application ou du produit choisi.`
        },
        {
            id: 3,
            title: "Qualité des finitions",
            imgUrl: "/img/quality.jpeg",
            description: `Les finitions extérieures de tous les luminaires GMR ENLIGHTS garantissent
             une durabilité maximale, même dans des conditions extrêmes, comme près de la mer ou dans des
              zones particulièrement corrosives. Les cycles des traitements de surface et de peinture sont 
              étudiés et testés depuis des années, avec un travail constant de comparaison avec les fournisseurs.
               Le résultat est un succès sans précédent : l’obtention de la certification par une tierce partie
                pour 8000h de tests au brouillard salin selon la norme ISO 9227 (soit plus de 11 mois de tests en continu).`
        },
        {
            id: 4,
            title: "Résistance aux températures élevées",
            imgUrl: '/img/resistance.jpeg',
            description: `Les luminaires GMR ENLIGHTS ont obtenu
             la certification européenne ENEC à une température 
             ambiante de fonctionnement de Ta -40° et jusqu’à + 55°C.
              La basse température à laquelle la puce LED fonctionne 
              est un fait très important qui démontre le soin que nous avons
               apporté à l’étude de la dissipation de la chaleur, qui est fondamentale pour garantir la 
            longue durée de vie des sources et du produit.`
        },
        {
            id: 5,
            title: "Protection élevée contre les intrusions et les impacts",
            imgUrl: "/img/protection.jpeg",
            description: `Les dispositifs GMR ENLIGHTS, selon la certification ENEC, ont tous un indice de protection IP66 et jusqu’à IK10 pour la protection contre l’intrusion de corps solides et liquides, égal à 20J d’énergie d’impact. Les produits qui n’ont pas atteint IK10 sont certifiés IK09, ce qui équivaut à la protection de 10J de l’énergie d’impact.`
        },
        {
            id: 6,
            title: "Protection contre les décharges électrostatiques et les surtensions",
            imgUrl: '/img/electro.jpeg',
            description: `Les luminaires GMR ENLIGHTS sont conçus pour assurer une protection élevée du module à LED contre les surtensions électrostatiques et la rigidité diélectrique. Sur demande, nous pouvons intégrer un SPD (Surge Protection Device) supplémentaire pour protéger l’ensemble du luminaire contre les pics de surtension allant jusqu’à 12kV/kA.`
        
        },
        {
            id: 7,
            title: "Qualité de la puce LED",
            imgUrl: '/img/led.jpeg',
            description: `Les luminaires GMR ENLIGHTS utilisent les meilleures sources LED du marché, sélectionnées avec une attention particulière non seulement à l’efficacité mais aussi à la qualité de la lumière et à la couleur.
            En étroite collaboration avec le fournisseur, nous avons identifié et adopté exclusivement une sélection spéciale de LED qui garantit la cohérence des couleurs ≤ 3 étapes MacAdam.`
        },
        {
            id: 8,
            title: "Confort visuel – Faible éblouissement",
            imgUrl: '/img/visual.jpeg',
            description: `Nous avons conçu et développé les systèmes optiques de nos luminaires GMR ENLIGHTS pour assurer un confort visuel élevé et minimiser l’effet pointiforme caractéristique des LED, qui sont des exigences essentielles, notamment dans les centres historiques ou les villes où les points lumineux sont montés à faible hauteur.`
        },
        
    ]

    return (
        <>
            <Layout title="Avantages">
                <Banner title="Avantages" />
                <Container>

                    <CustomRow>
                        {advantages?.map((adv) => (

                            <Col sm={12} md={6}>
                                <AdvantagesCard title={adv.title} imgUrl={adv.imgUrl} description={adv.description} />
                            </Col>
                        ))}
                    </CustomRow>
                </Container>
            </Layout>
        </>
    )
}