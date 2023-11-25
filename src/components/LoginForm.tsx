import { useState } from 'react';
import axios  from 'axios'; 
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });
      const access = response.data.access;
      localStorage.setItem("accessToken", access);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
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