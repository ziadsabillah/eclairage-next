import { Col, Row } from "react-bootstrap"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Fade } from 'react-slideshow-image'



const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2em;

`;

const Title = styled.div`
    text-align: left;
    position: relative;
    h1 {
        margin-bottom: 2em;
    }
    h1::after {
        position: absolute;
        content: '';
        border-bottom: 2px solid #E6E97F;
        bottom: 30%;
        left: 0;
        width: 100%;
        
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
    max-height: 400px;
    border: none;
`;

const StyledFade = styled(Fade)`
    .default-nav {
        background: transparent;
        svg {
            fill: #fff !important;
        }
    }

  
    .default-nav:hover {
        background: transparent;
        svg {
            color: #CDD400;
        }
    }
    .default-nav:focus {
        background: transparent;
        svg {
            color: #CDD400;
        }
    }
`;



const ImageSide = ({ src }) => {

    return (
        <StyledFade>
            {src.map((imgSrc, index) => (
                <Image key={index} src={imgSrc} layout="fill" />
            ) )}
        </StyledFade>
    )
}

const ContentSide = ({ titleOne, titleTwo, paragraph, href }) => {
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

const RowStyled = styled(Row)`
    justify-content: space-between;
    width: 100%;
    padding-right: 0;
    padding-left: 0;

    margin-right: 0;
    margin-left: 0;

`;

const ColStyled = styled(Col)`
    padding-left: 0;
    padding-right: 0;
`;
const Showcase = (
    { side, titleOne, titleTwo, imgPath, paragraph, href }
) => {
    return (
        <>
                <RowStyled>
                    <ColStyled xs={{ order: side === 0 ? 2 : 1 }} md={side === 0 ? 7 : 5}>
                        {side === 0 ? (<ImageSide src={imgPath} />) : (<ContentSide
                            titleOne={titleOne}
                            titleTwo={titleTwo}
                            paragraph={paragraph}
                            href={href} />)}
                    </ColStyled>
                    <ColStyled xs={{ order: side === 0 ? 1 : 2 }} md={side === 0 ? 5 : 7}>
                        {side === 0 ?(<ContentSide titleOne={titleOne}
                            titleTwo={titleTwo}
                            imgPath={imgPath}
                            paragraph={paragraph}
                            href={href} />) : (<ImageSide src={imgPath} />)}
                    </ColStyled>
                </RowStyled>


        </>
    )
}

export default Showcase;