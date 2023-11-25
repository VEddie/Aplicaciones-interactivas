import { Col, Container, Row } from 'react-bootstrap';
import DevsTable from './components/DevsTable';
import Nav_Bar from './components/Nav_Bar';
import Formulary from './components/Formulary';
import APIClient from './api/apiClient';
import { useEffect, useState } from 'react';

export interface Developer {
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    country: string;
}

function App() {
    const [isAutheticated, setIsAutheticated] = useState(false);
    const [developers, setDevelopers] = useState<Developer[]>([]);

    const fetchDevelopers = () => {
        new APIClient<Developer>('/devs').getAll().then((res) => {
            setDevelopers(res);
        });
    };

    useEffect(() => {
        fetchDevelopers();
    }, []);
    
    return (
        <Container>
            <Nav_Bar />
            <Row>
                <Col lg={4}>
                    <Formulary onDeveloper={(dev) => setDevelopers([... developers, dev])}/>
                </Col>
                <Col lg={8}>
                    <DevsTable developers={developers}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
