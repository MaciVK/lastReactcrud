import React, { Component } from "react";
import Axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";
export default class Hospitales extends Component {
  state = {
    hospitales: [],
    status: false,
  };
  cargarHospitales = () => {
    var request = "/webresources/hospitales";
    var url = Global.urlApiHospitales + request;
    Axios.get(url).then((res) => {
      this.setState({
        hospitales: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarHospitales();
  };
  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID HOSPITAL</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">DIRECCION</th>
              <th scope="col">TELEFONO</th>
              <th scope="col">Nº CAMAS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status &&
              this.state.hospitales.map((hospital, index) => {
                return (
                  <tr key={index}>
                    <td scope="row"> {hospital.idhospital} </td>
                    <td>{hospital.nombre}</td>
                    <td>{hospital.direccion}</td>
                    <td>{hospital.telefono}</td>
                    <td>{hospital.camas}</td>
                    <td>
                      <NavLink to={"/detalleshospital/" + hospital.idhospital}>
                        Detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
