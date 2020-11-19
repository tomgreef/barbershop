import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clientAxios from '../config/axios'

const NewAppointment = (props) => {

    // Generate state as an object
    const [appointment, saveAppointment] = useState({
        date: '',
        time: '',
        client: ''
    });

    // Read the information of the form
    const updateState = e => {
        saveAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    // Send a request to the API
    const createNewAppointment = e => {
        // We normally use the following to avoid page refresh when submiting forms
        // e.preventDefaul();

        // Send the request through axios
        clientAxios.post('/appointments', appointment)
            .then(response => {
                props.saveConsult(true);

                // Redirect, but doesnt work
                // props.history.push('/appointments')
                window.location = "/appointments"
            })

    }

    return (
        <Fragment>
            <h1 className="my-5 d-flex justify-content-center">Crear nueva cita</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/appointments'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit={createNewAppointment}
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="date">Fecha</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    id="date"
                                    name="date"
                                    required
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Hora</label>
                                <input
                                    type="time"
                                    className="form-control form-control-lg"
                                    id="time"
                                    name="time"
                                    required
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="client">Cliente</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="client"
                                    name="client"
                                    required
                                    onChange={updateState}
                                />
                            </div>

                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(NewAppointment);