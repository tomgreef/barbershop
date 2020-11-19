import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from "../config/axios"
import Swal from "sweetalert2"

const Appointment = (props) => {
    if (!props.appointment) {
        props.history.push("/appointments")
        return null
    }

    // extract by props
    const { appointment: { client, date, time, _id } } = props;

    // Remove an appointment
    const removeAppointment = id => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Una cita eliminada no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {

                // Delete Alert
                Swal.fire(
                    '¡Eliminado!',
                    'Su cita ha sido eliminado.',
                    'success'
                )

                // Delete from Database
                axios.delete(`/appointments/${id}`)
                    .then(response => {
                        props.saveConsult(true)
                        props.history.push("/appointments")
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
    }

    return (
        <Fragment>
            <h1 className="my-5 d-flex justify-content-center">Nombre Cita: {client}</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/appointments'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-3 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between">
                                    <p>{date} a las {time}</p>
                                    <p>Cliente: {client}</p>
                                </div>
                                <div className="d-flex">
                                    <button
                                        type="button"
                                        className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                        onClick={() => removeAppointment(_id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Appointment);