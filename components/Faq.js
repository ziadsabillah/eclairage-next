import { Accordion, Container, Card, Button } from 'react-bootstrap';
import { AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import { SectionHeader } from '../components/SectionHeader'


const FAQSection = styled.div`

    position: relative;
    padding: 81px 0;

`;

const CustomAccordion = styled(Accordion)`
    a {
        text-decoration: none;
    }
    button, button:hover, button:focus, button.active {
        text-decoration: none;
        color: grey;

    }
`

const CustomCard = styled(Card)`
    border: none;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 10px;

    
    .card-header {
        background: #fff !important;
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
                                <Card.Header>
                                    <Accordion.Toggle eventKey={item.id} as={Button} variant="link">
                                        Q{item.id + '. ' +item.question}

                                    </Accordion.Toggle>

                                </Card.Header>
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