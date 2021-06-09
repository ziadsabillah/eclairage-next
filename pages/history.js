import styled from 'styled-components';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { SectionHeader } from '../components/SectionHeader';
import Presentation from '../components/Sections/Presentation';

const History = () => {
    return (
        <>
        <Layout title="Notre Histoire">
            <Banner title="Histoire" />
            <SectionHeader>
                <h2>GMR Enlights</h2>
                <p>Tradition, design et performance : une histoire d’innovation depuis 1863.</p>
            </SectionHeader>
            <Presentation />
        </Layout>
        </>
    )
}

export default History;