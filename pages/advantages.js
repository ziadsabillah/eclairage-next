import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Banner from '../components/Banner'
import AdvantagesCard from '../components/CategoryCard/AdvantagesCard'
import Layout from '../components/Layout'


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
            id: 1,
            title: "Accessibilité des produits",
            imgUrl: "/img/access.jpeg",
            description: `Les produits GMR ENLIGHTS ont été développés pour faciliter l’accessibilité et l’entretien.
            La plupart des luminaires peuvent être ouverts et leurs composants internes remplacés sans l’aide d’outils.
            Dans certains cas, afin de ne pas compromettre la conception du produit ou pour garantir la meilleure solution technique, des solutions d’accessibilité spécifiques ont été développées.`
        },
        {
            id: 1,
            title: "Accessibilité des produits",
            imgUrl: "/img/access.jpeg",
            description: `Les produits GMR ENLIGHTS ont été développés pour faciliter l’accessibilité et l’entretien.
            La plupart des luminaires peuvent être ouverts et leurs composants internes remplacés sans l’aide d’outils.
            Dans certains cas, afin de ne pas compromettre la conception du produit ou pour garantir la meilleure solution technique, des solutions d’accessibilité spécifiques ont été développées.`
        }
    ]

    return (
        <>
            <Layout title="Avantages">
                <Banner title="Avantages" />
                <Row>
                    {advantages?.map((adv) => (

                        <Col sm={12} md={4}>
                            <AdvantagesCard title={adv.title} imgUrl={adv.imgUrl} description={adv.description} />
                        </Col>
                    ))}
                </Row>
            </Layout>
        </>
    )
}