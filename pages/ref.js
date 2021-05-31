import { Row, Col, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import Banner from '../components/Banner';
import styled from 'styled-components';

const CustomCol = styled(Col)`
    background-color: #cdd400;
    margin-right: 5.5%;
`

export default function RefPage() {


    return (
        <>

            <Layout title="References">
                <Banner title="Références" />
                <Container>
                    <Row>
                        <CustomCol sm={12} md={4}>
                            
                        </CustomCol>
                        
                        
                    </Row>
                </Container>


            </Layout>

        </>
    )
}