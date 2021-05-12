import { Col, Row } from "react-bootstrap"
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
        border-bottom: 2px solid #E6E97F;
        bottom: 214px;
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

const Image = styled.img`
    width: 100%;
    height: 100%;
    border: none;
`;



const ImageSide = ({src}) => {
    return (
                        <Image src={src} layout="fill" />
    )
}

const ContentSide = ({titleOne, titleTwo, paragraph, href}) => {
    return (
                <ContentWrapper>
                    <Title>
                        <h1>
                            {titleOne}
                            <br />
                            {titleTwo}
                        </h1>
                    </Title>
                    <Paragraph>
                        <p>
                        {paragraph}
                        </p>
                    </Paragraph>
                    <ButtonWrapper>
                        <Button href={href}>SAVOIR PLUS <FontAwesomeIcon icon={faArrowRight} className="icon"></FontAwesomeIcon></Button>
                    </ButtonWrapper>
                </ContentWrapper>
    )
}
const Showcase = (
    {side, titleOne, titleTwo, imgPath, paragraph, href}
    ) => {
    return (
        <>
            <Row>
                <Col sm={12} md={side === 0 ? 7 : 4}>
                    {side === 0 ? (<ImageSide src={imgPath} />) : (<ContentSide 
                    
                        titleOne={titleOne}
                        titleTwo={titleTwo}
                        paragraph={paragraph}
                        href={href}  />)}
                </Col>
                <Col sm={12} md={side === 1 ? 4 : 7}>
                    {side === 1 ? (<ImageSide src={imgPath} />) : (<ContentSide titleOne={titleOne}
                        titleTwo={titleTwo}
                        imgPath={imgPath}
                        paragraph={paragraph}
                        href={href}/>)}
                </Col>
            </Row>

        

        </>
    )
}

export default Showcase;