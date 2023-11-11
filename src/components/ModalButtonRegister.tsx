import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterForm from './RegisterForm';

const ModalButtonRegister = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                Registrarse
            </Button>

            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary'>Registrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalButtonRegister;
