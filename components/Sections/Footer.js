import styled from 'styled-components'
import AutoContainer from '../AutoContainer';
import { Column3, ListStyleOne, Row } from '../General'

const MainFooter = styled.footer`
    background-image: url('/img/6.jpeg');
    position: relative;
    padding-top: 55px;
    display: block;

    &::before {
        position: absolute;
        content: '';
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: block;
        background-color: #1E1D24;
    }
`;


const MiddleSection = styled.div`
    position: relative;
    padding-top: 45px;
    padding-bottom: 40px;
`;

const LogoWidget = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

const Logo = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

const Text = styled.div`
    color: #cccccc;
    font-size: 16px;
    line-height: 1.8em;
    margin-bottom: 25px;
`;

const LinksWidget = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

const LinksHeader = styled.h2`
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #ffff;
    line-height: 1.2em;
    margin-bottom: 25px;
    padding-bottom: 20px;
    text-transform: capitalize;

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 1px;
        background-color: #62BE1E;

        @media (max-width: 400px) {
            display: none;
            content: none;
            width: none;
        }
    }
`;

const List = styled.ul`
    position: relative;

    li, a {
        position: relative;
        margin-bottom: 8px;
        color: #cccc;
        font-size: 15px;
        transition: all 0.3s ease;
     
        
        &:hover {
            color: #fff;
        }
        
    }

    li {
        padding-left: 10px;

        &::before {
            position: absolute;
            left: 0px;
            top: 0px;
            content: '-';
            line-height: 1.2em;
        }
    }
`;



const Footer = () => {
    return (
        <>
            <MainFooter>
                <AutoContainer>
                    <MiddleSection>
                        <Row className="clearfix">
                            <Column3>
                                <LogoWidget>
                                    <Logo>
                                        <img src="/img/logo.png" alt="logo" />
                                    </Logo>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do iusmod tempor incididunt ut labore et.
                                    </Text>
                                </LogoWidget>
                            </Column3>
                            <Column3>
                                <LinksWidget>
                                    <LinksHeader>
                                        Services
                                    </LinksHeader>
                                    <List>
                                        <li>
                                            <a href="/">
                                            Taille des Arbres et Arbustes 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Entretien des jardins
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Irrigation Et Drainage
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                
                                                Entretien de la pelouse et du jardin
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Plantation et enlèvement
                                            </a>
                                        </li>
                                    </List>
                                </LinksWidget>
                            </Column3>
                            <Column3>
                                <LinksWidget>
                                    <LinksHeader>
                                        Contact
                                    </LinksHeader>
                                    <List>
                                        <li>
                                            Avenue Mohamed V
                                        </li>
                                        <li>
                                            +212 XXXXXXXX
                                        </li>
                                        <li>
                                            +212 5XXXXXXX
                                        </li>
                                        <li>
                                            exemple@matechso.com
                                        </li>
                                    </List>
                                </LinksWidget>
                            </Column3>
                        </Row>
                    </MiddleSection>
                </AutoContainer>
            </MainFooter>
        </>
    )
}


export default Footer;