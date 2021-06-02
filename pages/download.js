import Layout from '../components/Layout'
import Banner from '../components/Banner'


import download from '../data/download'
import { Container, Row, Col } from 'react-bootstrap'

import styled from 'styled-components';
import DownlaodCard from '../components/CategoryCard/DownloadCard'

const CustomRow = styled(Row)`
    margin-top: 2em;
`;

export default function DownloadPage() {
    return (
        <>

        <Layout title="Télechargeable">
            <Banner title="Télechargeable" />
            <Container>
                <CustomRow>
                    {download?.map((item) => (
                        <Col sm={12} md={4}>
                            <DownlaodCard title={item.title} imgUrl={item.imgUrl} description={item.description} />
                        </Col>
                    ))}
                </CustomRow>
            </Container>
        </Layout>
            

        </>
    )
}