import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Appointments = ({ appointments }) => {
    
    function ListItem({ appointment }) {

        return (
            <Fragment>
                <li className="p-2 p-t list-group-item list-group-item-action">
                    <div className="d-flex justify-content-between align-items-center">
                        <div><p>{appointment.date} a las {appointment.time}</p>
                            <p>Cliente: {appointment.client}</p></div>
                        <Link to={`./appointment/${appointment._id}`} className="btn btn-info text-uppercase py-1 px-2 font-weight-bold">Modificar</Link>
                    </div>
                </li>
            </Fragment>
        )
    }

    const list = appointments.map(appointment => (
        <ListItem key={appointment._id} appointment={appointment} />
    ))

    if (appointments.length === 0) {
        return (
            <Fragment>
            <h1 className="my-5 d-flex justify-content-center">Administrador de Citas</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/newAppointment'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
                    </div>
                    <h3 className="col my-5 d-flex justify-content-center">No hay citas</h3>
                </div>
            </div>
        </Fragment>)
    } else {
        return (
            <Fragment>
                <h1 className="my-5 d-flex justify-content-center">Administrador de Citas</h1>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <Link to={'/newAppointment'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <ul className="list-group">
                                {list}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Appointments;