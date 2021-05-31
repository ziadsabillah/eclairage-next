import EntryContent from "../components/EntryContent";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { Text } from '../components/General';
import styled from 'styled-components';
import Contact from '../components/Contact'


const StyledText = styled(Text)`
    text-align: center;
`


export default function AboutPage() {
    return (
        <>

            <Layout>
                <EntryContent title="Fabricant d'eclairage" videoUrl='https://www.youtube.com/embed/nsUGTCZU9aI' />
                <SectionHeader>
                    <h2>Fabricant italien d’éclairage public routier et urbain</h2>
                </SectionHeader>
                <StyledText>
                    GMR ENLIGHTS est un fabricant italien leader dans le secteur de l’éclairage
                    avec plus de 25 ans d’expérience dans l’éclairage public et le mobilier urbain.
                </StyledText>
                <Contact />
                
            </Layout>

        </>
    )
}