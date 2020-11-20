import React, { Component } from "react";
import Axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";
export default class InsertHospital extends Component {
  cajaNombreRef = React.createRef();
  cajaIdRef = React.createRef();
  cajaTelefonoRef = React.createRef();
  cajaDireccionRef = React.createRef();
  cajaCamasRef = React.createRef();

  state = {
    status: false,
  };
  crearHospital = (e) => {
    e.preventDefault();
    var request = "/webresources/hospitales/post";
    var url = Global.urlApiHospitales + request;
    var hospital = {
      idhospital: parseInt(this.cajaIdRef.current.value),
      nombre: this.cajaNombreRef.current.value,
      telefono: this.cajaTelefonoRef.current.value,
      direccion: this.cajaDireccionRef.current.value,
      camas: parseInt(this.cajaCamasRef.current.value),
    };
    Axios.post(url, hospital).then((res) => {
      this.setState({ status: true });
    });
  };

  render() {
    return (
      <div>
        {this.state.status == true && (
          <h1 style={{ color: "white", backgroundColor: "green" }}>
            HOSPITAL CREADO CON EXITO
          </h1>
        )}
        <h1>Nuevo Hospital</h1>
        <NavLink to="/" className="btn btn-danger">
          VOLVER
        </NavLink>
        <form
          style={{ width: "50%", margin: "10px auto" }}
          onSubmit={this.crearHospital}
        >
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="cajaNombre"
            ref={this.cajaNombreRef}
          />
          <label>ID Unívoco:</label>
          <input
            type="number"
            className="form-control"
            name="cajaNombre"
            ref={this.cajaIdRef}
          />
          <label>Teléfono de contacto:</label>
          <input
            type="text"
            className="form-control"
            name="cajaNombre"
            ref={this.cajaTelefonoRef}
          />
          <label>Dirección:</label>
          <input
            type="text"
            className="form-control"
            name="cajaNombre"
            ref={this.cajaDireccionRef}
          />
          <label>Camas del Hospital:</label>
          <input
            type="number"
            className="form-control"
            name="cajaNombre"
            ref={this.cajaCamasRef}
          />
          <br />
          <button className="btn btn-success">CREAR</button>
        </form>
      </div>
    );
  }
}
