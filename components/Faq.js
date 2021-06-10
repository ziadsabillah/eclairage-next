import { Accordion, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { SectionHeader } from '../components/SectionHeader'


const FAQSection = styled.div`

    position: relative;
    padding: 31px 0;


`;

const CustomAccordion = styled(Accordion)`
    a {
        text-decoration: none;
    }
    button, button:hover, button:focus, button.active {
        text-decoration: none;
        color: grey;
        padding: 1em;
        border: none;
        box-shadow: none;
        border-bottom: 1px solid lightgrey;
        

    }
`

const CustomCard = styled(Card)`
    border: none;
    margin-bottom: 5px;
    box-shadow: rgba(100, 100, 111, 0.1) 0px 5px 10px 0px;

    
    .card-header {
        border: none;
    }
   
`;

const Faq = ({ data }) => {
    return (
        <>

            <Container>
                <SectionHeader>
                    <h2 style={{ marginTop: '1em' }}>FAQ</h2>
                </SectionHeader>
                <FAQSection>
                    <CustomAccordion defaultActiveKey="0">
                        {data?.map(item => (
                            <CustomCard>
                                <Accordion.Toggle as={Card.Header} eventKey={item.id} as={Button} variant="link">
                                    Q{item.id + '. ' + item.question}
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey={item.id}>
                                    <Card.Body>{item.answer}</Card.Body>
                                </Accordion.Collapse>
                            </CustomCard>
                        ))}
                    </CustomAccordion>
                </FAQSection>
            </Container>


        </>
    )
}

export default Faq;