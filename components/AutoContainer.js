import styled from 'styled-components'

const AutoContainer = styled.div`
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
        padding: 15px;
    }
`;

export default AutoContainer;