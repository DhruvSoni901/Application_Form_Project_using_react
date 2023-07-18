import { Button, ListGroup,ListGroupItem } from "react-bootstrap";
import {RiDeleteBin6Line} from "react-icons/ri"; 

const InfoAppointment = ({appointment,onDeleteAppointment})=>{

    return(
        <>
            <ListGroupItem>
                <p><small>Date: </small>{appointment.aptDate}</p>
                <p><strong>First Name: </strong>{appointment.firstName}</p>
                <p><strong>Last Name: </strong>{appointment.lastName}</p>
                <p><strong>Comments: </strong>{appointment.aptNotes}</p>
                <Button onClick={() => onDeleteAppointment(appointment.id)} size="sm" variant="danger"><RiDeleteBin6Line />Delete</Button>
            </ListGroupItem>
        </>
    )
}

export default InfoAppointment;