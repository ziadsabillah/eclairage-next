import styled from 'styled-components'
import AutoContainer from '../AutoContainer';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons'

const TopHeaderSection = styled.section`
    position: relative;
    padding: 10px 0;
`;

const TopHeaderWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
`;

const LogoBox = styled.div`
    display: flex;
    img {
        max-width: 183px;
        max-height: 100%;
    }
`;

const BoxHoraires = styled.div`
    display: flex;
    position: relative;
    align-items: center;

`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 2em !important;
        color: #62BE1E;

        &:hover {
            color: #FE8A53;
            cursor: pointer;
        }
    }
`;

const Text = styled.div`
    padding: 5px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: .8em;
        font-weight: 600;
        line-height: 1;
        width: 100%;
    }
`;


const Button = styled.div`
    display: flex;
    padding: 10px;
    position: relative;
`;

const ButtonWrap = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 3px 8px 1px 0px;

    a {
        text-decoration: none;  
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 2em;
        letter-spacing: 0.5px;
        background-color: #fe8a01;
        border-radius: 2px;
        padding: 13px 21px 13px 21px;
        transition: background 0.35s ease-in;
        &:hover {
            background: #62BE1E;
        }
    }
`;
const TopHeader = () => {
    return (
        <>

            <TopHeaderSection>
                <AutoContainer>
                    <TopHeaderWrapper>
                        <LogoBox>
                            <img src="/img/logo.png" alt="Template Logo" />
                        </LogoBox>
                        <BoxHoraires>
                            <Icon>
                                <FontAwesomeIcon icon={faClock} />
                            </Icon>
                            <Text>
                                <h3>LUN-VEN: 9H:00 à 16H:00</h3>
                                <h3>SAMEDI: 9H:00 14H:00</h3>
                            </Text>
                           
                        </BoxHoraires>
                        <Button>
                                <ButtonWrap>
                                    <a href="/">Reserver</a>
                                </ButtonWrap>
                        </Button>
                    </TopHeaderWrapper>
                </AutoContainer>
            </TopHeaderSection>


        </>
    )
}

export default TopHeader;