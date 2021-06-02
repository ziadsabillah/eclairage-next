import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components'
import AutoContainer from '../AutoContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import aboutData from '../../data/services';

import contactInfo from '../../data/contactInfo';



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
    text-align: center; 
    @media (min-width: 768px) {
        text-align: left;
    }
`;

const LogoWidget = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

const Logo = styled.div`
    position: relative;
    margin-bottom: 20px;
    color: #ffffff;
    font-size: 2em;
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
        background-color: #F7BD00;

        @media (max-width: 400px) {
            display: none;
            content: none;
            width: none;
        }
    }
`;

const List = styled.ul`
    position: relative;
    padding: 0;
    li, a {
        position: relative;
        margin-bottom: 8px;
        color: #cccc;
        font-size: 15px;
        transition: all 0.3s ease;
        text-decoration: none;
     
        
        &:hover {
            color: #fff;
        }
        
    }

    svg {
        font-size: 2em;
        text-align: center;
    }
`;

const IconWrapper = styled.li`
    text-align: center;
    margin-bottom: 2em !important;
`;

const Callbar = styled.div`
    position: fixed;
    bottom: 0px;
    background: #000;
    z-index: 999999 !important;
    text-align: center;
    line-height: 1.7em;
    font-size: 21px;
    width: 100%;
    color: #fff;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            color: #cdd400 !important;
            text-decoration: none;
            font-weight: 300;
            display: flex;
            align-items: center
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
                            <Col sm={12} md={3}>
                                <LogoWidget>
                                    <Logo>
                                        GMRENLIGHTS SARL.
                                    </Logo>
                                    
                                </LogoWidget>
                            </Col>
                            <Col sm={12} md={3}>
                                <LinksWidget>
                                    <LinksHeader>
                                        Services
                                    </LinksHeader>
                                    <List>
                                        {aboutData?.map((service) => (
                                            <li>
                                                {service.title}
                                            </li>
                                        ))}
                                    </List>
                                </LinksWidget>
                            </Col>
                            <Col sm={12} md={3}>
                                <LinksWidget>
                                    <LinksHeader>
                                        Contact
                                    </LinksHeader>
                                    <List>
                                        <li>
                                            {contactInfo.address}
                                        </li>
                                        {contactInfo.phone?.map((number) => (
                                            <li>
                                                {number}
                                            </li>
                                        )) }
                                        <li>
                                            {contactInfo.contact}
                                        </li>
                                    </List>
                                </LinksWidget>
                            </Col>
                            <Col sm={12} md={3}>
                                <LinksWidget>
                                    <LinksHeader>
                                        Réseaux Sociaux
                                    </LinksHeader>
                                    <LinksWidget>
                                        <List>
                                            <IconWrapper><FontAwesomeIcon icon={faFacebook} /></IconWrapper>
                                            <IconWrapper><FontAwesomeIcon icon={faInstagram} /></IconWrapper>
                                        </List>
                                    </LinksWidget>
                                </LinksWidget>
                            </Col>
                        </Row>
                    </MiddleSection>
                </AutoContainer>
                <Callbar>
                    <p>
                        <a>
                            <img src="/icons/ico-mobile.png" alt />
                        </a>
                        <a href="/"  style={{ marginTop: '6px', marginLeft: '6px' }}>Nous appeler</a>
                        <img style={{ marginLeft: '40px' }} src="/icons/ico-mail.png" alt="Icon" />
                        <a href='/contact' style={{ marginTop: '6px', marginLeft: '6px'  }}>
                             Nous écrire 
                        </a>
                    </p>
                </Callbar>
            </MainFooter>
        </>
    )
}


export default Footer;