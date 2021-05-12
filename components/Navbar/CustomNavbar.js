import styled from 'styled-components';
import Logo from './Logo'
import NavLinks from './NavLinks';
import { useState, useEffect } from 'react';
import { DeviceSize } from './responsive'
import MobileNavLinks from './MobileNavLinks'

import { useMediaQuery } from 'react-responsive'

const NavbarContainer = styled.div`
    transition: all .4s ease;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    padding-top: ${props => props.status === 'scrolling' ? 'unset' : '3em'};
    background: ${props => props.status === 'scrolling' ? 'rgba(0,0,0,0.7) !important' : 'transparent'};
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.status === 'scrolling' ?
        `  
        img {
            max-height: 38px !important;
            max-width: 240px !important; 
        }

        ` : ``
    }
    
`;


const LeftSection = styled.div`
    display: flex;
`;

const RightSection = styled.div`
    display: flex;
`;

const CustomNavbar = () => {

    const [status, setStatus] = useState('top');

    let listener = null;
    useEffect(() => {
        checkScrolled()

    }, [])

    const checkScrolled = () => {
        listener = document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (status !== 'scrolling') {
                    setStatus('scrolling')
                }
            } else {
                setStatus('top')
            }
        })


    }
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    console.log(status);
    return (
        <>

            <NavbarContainer status={status}>
                <LeftSection>
                    <Logo></Logo>
                </LeftSection>
                <LeftSection>
                    {!isMobile && <NavLinks />}
                </LeftSection>
                {isMobile && (
                    <RightSection>
                        <MobileNavLinks />
                    </RightSection>
                )}

            </NavbarContainer>
        </>
    )
}

export default CustomNavbar