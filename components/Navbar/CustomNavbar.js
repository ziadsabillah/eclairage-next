import styled from 'styled-components';
import Logo from './Logo'
import NavLinks from './NavLinks';
import { DeviceSize } from './responsive'
import MobileNavLinks from './MobileNavLinks'

import { useMediaQuery } from 'react-responsive'

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    padding-top: 3em;
    background: transparent;
    justify-content: space-around;
    position: absolute;
    
`;

const LeftSection = styled.div`
    display: flex;
`;

const RightSection = styled.div`
    display: flex;
`;

const CustomNavbar = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return (
        <>

            <NavbarContainer>
                <LeftSection>
                    <Logo></Logo>
                </LeftSection>
                <LeftSection>
                    {!isMobile && <NavLinks />}
                </LeftSection>
                <RightSection>
                    {isMobile && <MobileNavLinks />}
                </RightSection>
            </NavbarContainer>
        </>
    )
}

export default CustomNavbar