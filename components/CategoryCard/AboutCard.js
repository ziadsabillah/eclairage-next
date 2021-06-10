import { Accordion } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components'

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import InView from 'react-intersection-observer';
import { motion } from 'framer-motion';



const GalleryImage = styled.div`
     position: relative;
     z-index: 1;
     margin-bottom: 4%;
     overflow: hidden;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
`;

const GalleryItem = styled.div`
    width: 100%;
    padding: 0 !important;
    line-height: 1.7 !important;
    list-style: none !important;

    img {
        width: 80%;
        height: auto;
        vertical-align: baseline;
        font-size: 100%;

        @media (max-width: 767px) {
            width: 100%;
        }
    }
`;

const GalleryText = styled.div`
    background-color: #000;
    padding-top: 4px !important;
    margin-top: -80px !important;
    margin-right: 18px !important;
    margin-left: 18px !important;
    z-index: 400;
    position: relative;
    text-align: left;
`;

const GalleryTextInner = styled.div`
    margin: 0 50px 0 30px;
    padding-bottom: 0;
    position: relative;
    color: #FFF !important;

    h2 {
        font-size: 25px;
        line-height: 30px;
        margin-top: 34px;
        padding-bottom: 10px;
        font-weight: 500;

        svg {
            margin-left: 1em;
        }
    }
    p {
        font-weight: 400;
        padding-bottom: 1em;
    }
`;


const CustomAccordion = styled(Accordion)`
    button {
        color: #fff !important;
        background: none !important;
    }
`


const ArrowIcon = ({ isOpen, color, size }) => {
    return (
        <>
            {isOpen ? (
                <AiOutlineArrowUp color={color} size={size} />
            ) : (<AiOutlineArrowDown color={color} size={size} />)}
        </>
    )
}



const AboutCard = ({ id, title, imgUrl, description }) => {

    const [accordionIsOpen, setAccordionIsOpen] = useState(false);

    const handleAccordionClick = () => {
        setAccordionIsOpen(!accordionIsOpen);
    }


    return (
        <>
            <InView threshold="0.11">
                {({ ref, inView }) => (
                    <motion.div ref={ref} initial={{ scale: .7 }} animate={inView ? {  scale: 1 } : { scale: .7, opacity: 0}} transition={{ duration: 0.8 }}>
                        <GalleryImage>
                            <GalleryItem>
                                <img src={imgUrl} />
                            </GalleryItem>
                        </GalleryImage>
                        <GalleryText>
                            <GalleryTextInner>
                                <CustomAccordion>
                                    <Accordion.Toggle eventKey={id} onClick={handleAccordionClick}>
                                        <h2>{title} <ArrowIcon isOpen={accordionIsOpen} color="white" size="20" />
                                        </h2>
                                    </Accordion.Toggle>
                                    <p>
                                        <img src="/icons/linea-txt.png" alt="Seperator" />
                                    </p>
                                    <Accordion.Collapse eventKey={id}>
                                        <p>
                                            {description}
                                        </p>
                                    </Accordion.Collapse>

                                </CustomAccordion>

                            </GalleryTextInner>
                        </GalleryText>

                    </motion.div>
                )}
            </InView>

        </>
    )
}

export default AboutCard;