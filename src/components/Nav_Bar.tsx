import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ModalButtonLogin from './ModalButtonLogin';
import ModalButtonRegister from './ModalButtonRegister';
import { Stack } from 'react-bootstrap';

const Nav_Bar = () => {
    return (
        <Navbar expand='lg' className='container'>
            <Container>
                <Navbar.Brand href='#'>Navbar</Navbar.Brand>
            </Container>

            <Stack direction='horizontal' className='ms-auto p-2' gap={3}>
                <ModalButtonRegister />
                <ModalButtonLogin />
            </Stack>
        </Navbar>
    );
};

export default Nav_Bar;
