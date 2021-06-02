import { Row, Container } from "react-bootstrap";
import styled from "styled-components";


const Wrapper = styled.div`
    padding-top: 165px !important;
    background-color: #000 !important;
    position: relative;
    
    @media only screen and (min-width: 1350px) {
        padding: 54px 0;
    }

    @media only screen and (max-width: 746px) {
        padding: 2em 0;
        text-align: center;
        width: 100%;
    }
    h1 {
        font-size: calc(36px + 1vw) !important;
        font-family: 'Roboto', sans-serif;
        font-weight: lighter;
        line-height: calc(30px + 1vw);
        color: #fff !important;
    }
`;

const Banner = ({ title }) => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <h1>{title}</h1>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export default Banner;