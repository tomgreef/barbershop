import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import clientAxios from "./config/axios";

// Components
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Appointment from "./components/Appointment";
import NewAppointment from "./components/NewAppointment"

function App() {
  // State de la app
  const [appointments, saveAppointments] = useState([]);
  const [consult, saveConsult] = useState(true);

  useEffect(() => {
    if (consult) {
      const consultarAPI = () => {
        //This gets the BASE URL and adds the argument
        clientAxios
          .get("/appointments")
          .then(response => {
            // Place the result in the state
            saveAppointments(response.data);
            // Disable the consult
            saveConsult(false);
          })
          .catch(error => {
            console.log(error);
          });
      };
      consultarAPI();
    }
  }, [consult]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={() => <Appointments appointments={appointments} />} />
        <Route exact path="/appointment/:id" render={(props) => {
          const appointment = appointments.filter(appointment => appointment._id === props.match.params.id)

          return (
            <Appointment
              appointment={appointment[0]}
              saveConsult={saveConsult}
            />
          )
        }}
        />
        <Route exact path="/newAppointment" component={() => <NewAppointment saveConsult={saveConsult} />} />
      </Switch>
    </Router>
  );
}

export default App;
