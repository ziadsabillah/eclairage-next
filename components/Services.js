// import { motion } from 'framer-motion';
// import { InView } from 'react-intersection-observer';
import AboutCard from "../components/CategoryCard/AboutCard";
import { Row, Col, Container } from "react-bootstrap";
import styled from 'styled-components';
import { SectionHeader } from './SectionHeader';

const CardSection = styled.div`
    width: 100%;
    background-color: #000;
    z-index: -1999;
`;

const Services = ({ aboutData }) => {
    return (
        <>

                        <CardSection>

                            <Container>
                                <Row>
                                    <SectionHeader>
                                        <h3 style={{ background: '#000', color: '#FFF' }}>Nos Services</h3>
                                        <img src="/icons/linea-txt.png" alt="Seperator" />

                                    </SectionHeader>
                                    
                                    {aboutData?.map((card) => (
                                        <Col key={card.id} md={6} lg={6} sm={12}>
                                            <AboutCard id={card.id} title={card.title} imgUrl={card.imgUrl} description={card.description} />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </CardSection>
                    
        </>
    )
}

export default Services;