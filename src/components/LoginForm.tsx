import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type='email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' />
            </Form.Group>
        </Form>
    );
};

export default LoginForm;
