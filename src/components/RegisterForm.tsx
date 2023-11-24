import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        setErrorMessage('');
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setErrorMessage('');
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setErrorMessage('');
    };

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value));
        setErrorMessage('');
    };

    const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
        setErrorMessage('');
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/users/', {
                username: username,
                password: password,
                email: email,
                age: age,
                country: country
            });
        } catch (error) {
            setErrorMessage("Hubo un error en los datos");
          }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleUsernameChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" value={email} onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group controlId="formGroupAge">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" value={age} onChange={handleAgeChange} />
            </Form.Group>

            <Form.Group controlId="formGroupCountry">
                <Form.Label>País</Form.Label>
                <Form.Control type="text" value={country} onChange={handleCountryChange} />
            </Form.Group>
            <div className="mt-4 d-flex align-items-end">
            <Button variant="primary" type="submit">
                Registrar
            </Button>
            </div>
        </Form>
    );
};

export default RegisterForm;