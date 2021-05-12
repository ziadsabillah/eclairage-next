import { Col, Row, Container } from "react-bootstrap"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'



const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3em;

`;

const Title = styled.div`
    text-align: left;
    
    h1::after {
        position: absolute;
        content: '';
        border-bottom: 1px solid #000;
        bottom: 188px;
        left: 10%;
        
        width: 50%;
        
    }
`;

const Paragraph = styled.div`
    position: relative;
    margin-top: 4em;
`;

const ButtonWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Button = styled.a`
    text-decoration: none;
    text-align: center;
    position: relative;
    color: #b5bb00 !important;
    border-width: 1px;
    border-color: #b5bb00;
    letter-spacing: 2px;
    font-size: 14px;
    padding: 0.3em 1em;
    background-color: transparent;
    line-height: 1.7em;
    border: 2px solid;

    display: inline-block;
    transition: all 0.4s ease 0ms;
    cursor: pointer;

    .icon {
        display: none;
    }

    &:hover {
        transition: width 0.4s ease;

        .icon {
            display: unset;
        }
    }
`;
const LeftShowcase = (
    // {title, imgPath, paragraph, href}
    ) => {
    return (
        <>
       
            <Row>
                <Col sm={12} md={7}>

                       {/* Image  */}
                        Test
                </Col>
                <Col sm={12} md={4}>
                    <ContentWrapper>
                        <Title>
                            <h1>
                                URBAN
                                <br />
                                Lighting
                            </h1>
                        </Title>
                        <Paragraph>
                            <p>
                            LED lighting fixtures with a unique and recognizable design. Lighting solutions to furnish streets, pedestrian avenues, parks, city centres, urban and residential areas, cycle paths or parking lots.
                
                            </p>
                        </Paragraph>
                        <ButtonWrapper>
                            <Button>SAVOIR PLUS <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon></Button>
                        </ButtonWrapper>
                    </ContentWrapper>
                </Col>
            </Row>

        

        </>
    )
}

export default LeftShowcase;