import Axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../../Global";

export default class DetallesHospital extends Component {
  constructor(props) {
    super(props);
    this.setState({ idhosp: props.idHospital });
  }
  state = {
    hospital: {},
    idhosp: 0,
    status: false,
  };
  cargarHospitalDetalle = () => {
    console.log(this.state.idhosp);
    var request = "/webresources/hospitales/" + this.props.idHospital;
    var url = Global.urlApiHospitales + request;
    console.log(url);
    Axios.get(url).then((res) => {
      this.setState({ hospital: res.data, status: true });
    });
  };

  componentDidMount = () => {
    this.cargarHospitalDetalle();
  };
  render() {
    return (
      <div>
        <h1>Hospital {this.state.hospital.nombre}</h1>
        {this.state.status && (
          <React.Fragment>
            <h1>Nombre: {this.state.hospital.nombre}</h1>
            <h2>ID Hospital: {this.state.hospital.idhospital}</h2>
            <h3>Direccion: {this.state.hospital.direccion}</h3>
            <h3>Contacto: {this.state.hospital.telefono}</h3>
            <h3>Numero de Camas: {this.state.hospital.camas}</h3>
            <div className="btn-group">
              <NavLink to="/modificar" className="btn btn-info">
                Modificar
              </NavLink>
              <NavLink
                to={"/eliminar/" + this.state.hospital.idhospital}
                className="btn btn-danger"
              >
                Eliminar
              </NavLink>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
