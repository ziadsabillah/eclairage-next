import { Col, Row } from "react-bootstrap"
import styled from 'styled-components'

import Youtube from 'react-youtube';

const RowBlackBackground = styled(Row)`
    background-color: #000;
    padding-top: 150px;
`

const ContentSide = styled(Col)`
    color: #fff;

`;

const Text = styled.div`
    position: relative;
    margin-bottom: 0;
    color: #fff;
    padding: ${props => props.isMobile ? '2em' : '4em'};

    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
    }
`;



const EntryContent = ({ title, videoUrl }) => {
    return (
        <>
            <RowBlackBackground>

                <ContentSide sm={12} md={4}>
                    <Text>
                        <h1>
                            {title}
                        </h1>
                    </Text>
                </ContentSide>
                <Col sm={12} md={8}>
                    <iframe width="95%" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                </Col>

            </RowBlackBackground>
        </>
    )
}

export default EntryContent;