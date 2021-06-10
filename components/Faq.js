import { Accordion, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import {SectionHeader } from '../components/SectionHeader'


const FAQSection = styled.div`

    position: relative;
    padding: 81px 0;

`;

const CustomAccordion = styled(Accordion)`
    a {
        text-decoration: none;
    }
    button {
        text-decoration: none;
    }
`

const Faq = ({data}) => {
    return (
        <>

        <Container>
            <SectionHeader>
                <h2 style={{ marginTop: '1em' }}>Questions Fréquemment Posées</h2>
            </SectionHeader>
            <FAQSection>
                <Accordion defaultActiveKey="0">
                    {data?.map(item => (
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle eventKey={item.id} as={Button} variant="link">
                                    {item.question}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={item.id}>
                                <Card.Body>{item.answer}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
            </FAQSection>
        </Container>


        </>
    )
}

export default Faq;