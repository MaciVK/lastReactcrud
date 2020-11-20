import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hospitales from "./CRUDHospitales/Hospitales";
import MenuCrud from "./CRUDHospitales/MenuCrud";
import DetallesHospital from "./CRUDHospitales/DetallesHospital";
import InsertarHospital from "./CRUDHospitales/InsertHospital";
import EliminarHospital from "./CRUDHospitales/EliminarHospital";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuCrud />
          <Switch>
            <Route path="/" exact component={Hospitales} />
            <Route path="/nuevohospital" exact component={InsertarHospital} />
            <Route
              path="/detallesHospital/:id"
              exact
              render={(props) => {
                var idHosp = props.match.params.id;
                return <DetallesHospital idHospital={idHosp} />;
              }}
            />
            <Route
              path="eliminar/:id"
              exact
              render={(props) => {
                var idHosp = props.match.params.id;
                return <EliminarHospital idhospital={idHosp} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
