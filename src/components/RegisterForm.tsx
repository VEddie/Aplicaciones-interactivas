import Form from 'react-bootstrap/Form';
const RegisterForm = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type='text' placeholder='Choose a username' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' placeholder='Password' />
            </Form.Group>
        </Form>
    );
};

export default RegisterForm;
