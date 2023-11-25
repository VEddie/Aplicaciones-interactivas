import { Button, Table } from 'react-bootstrap';
import { Developer } from '../App';

interface Props {
    developers: Developer[];
}

const DevsTable = ( {developers }: Props) => {
    return (
        <Table bordered hover responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>País</th>
                    {/*isAutheticated && <th>Acción</th>*/}
                </tr>
            </thead>
            <tbody>
                {developers.map((dev, index) => (
                    <tr key={index}>
                        <td>{dev.first_name}</td>
                        <td>{dev.last_name}</td>
                        <td>{dev.email}</td>
                        <td>{dev.age}</td>
                        <td>{dev.country}</td>
                        {/*isAutheticated && <Button variant='outline-danger'>Borrar</Button>*/}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
export default DevsTable;
