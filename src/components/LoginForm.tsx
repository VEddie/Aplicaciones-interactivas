import { useState, ChangeEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type='text' value={username} onChange={handleUsernameChange} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type='password' value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <div className="mt-4 d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;