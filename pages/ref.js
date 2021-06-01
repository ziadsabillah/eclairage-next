import { Row, Col, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import Banner from '../components/Banner';
import styled from 'styled-components';
import RefCard from "../components/CategoryCard/RefCard";


export default function RefPage() {
    return (
        <>
            <Layout title="References">
                <Banner title="Références" />
                <Row>
                    <Col md={6}>
                        <RefCard />
                    </Col>
                    <Col md={6}>
                        <RefCard />
                    </Col>
                </Row>
            </Layout>

        </>
    )
}