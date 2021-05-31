import { Col, Row } from "react-bootstrap"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Fade } from 'react-slideshow-image'

import { motion } from 'framer-motion';

import { InView } from 'react-intersection-observer';



const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Title = styled.div`
    text-align: left;
    position: relative;
    margin: 1em;
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
    margin-top: 1em;
    padding: 1em;
`;

const ButtonWrapper = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
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
            ))}
        </StyledFade>
    )
}

const ContentSide = ({ titleOne, titleTwo, paragraph, href }) => {
    return (
        <InView threshold={0.75}>
            {({ ref, inView }) => (
                <motion.div ref={ref} initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1} : { opacity: 0}}
                    transition={{ duration: 0.8 }}>
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
                </motion.div>
            )}
        </InView>

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
                <ColStyled md={{ order: side === 0 ? "first" : "last" }} lg={{ order: side === 0 ? "last" : "first" }} md={7}>
                    <ImageSide src={imgPath} />
                </ColStyled>
                <ColStyled md={{ order: side === 0 ? "last" : "first" }} lg={{ order: side === 0 ? "first" : "last" }} md={5}>
                    <ContentSide titleOne={titleOne}
                        titleTwo={titleTwo}
                        imgPath={imgPath}
                        paragraph={paragraph}
                        href={href} />
                </ColStyled>


            </RowStyled>


        </>
    )
}

export default Showcase;