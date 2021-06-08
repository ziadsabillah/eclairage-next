import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Banner from '../components/Banner'
import AdvantagesCard from '../components/CategoryCard/AdvantagesCard'
import Layout from '../components/Layout'
import advantages from '../data/advantages';



const CustomRow = styled(Row)`
    width: 100%;

`;

export default function AdvantagesPage() {

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