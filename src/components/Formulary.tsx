import { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Developer } from '../App';
import APIClient from '../api/apiClient';

interface Props {
    onDeveloper: (dev: Developer) => void;
}

const Formulary = ({ onDeveloper }: Props) => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);

    const addDev = (dev: Developer) => {
        new APIClient<Developer>('devs/')
            .post(dev)
            .then((res) => {
                onDeveloper(dev);
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Form
            className='m-5'
            onSubmit={(e) => {
                e.preventDefault();
                if (
                    firstNameRef.current &&
                    lastNameRef.current &&
                    emailRef.current &&
                    ageRef.current &&
                    countryRef.current
                ) {
                    const dev = {
                        'first_name': firstNameRef.current.value,
                        'last_name': lastNameRef.current.value,
                        'email': emailRef.current.value,
                        'age': parseInt(ageRef.current.value),
                        'country': countryRef.current.value,
                    };
                    console.log(dev);
                    addDev(dev);
                    
                    firstNameRef.current.value = '';
                    lastNameRef.current.value = '';
                    emailRef.current.value = '';
                    ageRef.current.value = '';
                    countryRef.current.value = '';
                }
            }}
        >
            <Col>
                <Row md='auto'>
                    <Form.Group className='mb-2' controlId='formBasicName'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control ref={firstNameRef} type='text' />
                    </Form.Group>
                </Row>
                <Row md='auto'>
                    <Form.Group className='mb-2' controlId='formBasicSurname'>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control ref={lastNameRef} type='text' />
                    </Form.Group>
                </Row>

                <Row md='auto'>
                    <Form.Group className='mb-2' controlId='formBasicEmail'>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control ref={emailRef} type='email' />
                    </Form.Group>
                </Row>

                <Row md='auto'>
                    <Form.Group className='mb-2' controlId='formBasicAge'>
                        <Form.Label>Edad</Form.Label>
                        <Form.Control ref={ageRef} type='number' />
                    </Form.Group>
                </Row>
                <Row md='auto'>
                    <Form.Group className='mb-2' controlId='formBasicCountry'>
                        <Form.Label>Pais</Form.Label>
                        <Form.Control ref={countryRef} type='text' />
                    </Form.Group>
                </Row>
            </Col>

            <Button variant='outline-primary' type='submit' className='mt-2 '>
                Agregar
            </Button>
        </Form>
    );
};

export default Formulary;
