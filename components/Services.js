import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
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
            <InView threshold={0.11}>
                {({ ref, inView }) => (
                    <motion.div ref={ref} initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3 }}>


                        <CardSection>

                            <Container>
                                <Row>
                                    <SectionHeader>
                                        <h3 style={{ background: '#000', color: '#FFF' }}>Nos Services</h3>
                                        <img src="/icons/linea-txt.png" alt="Seperator" />

                                    </SectionHeader>

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

        </>
    )
}

export default Services;