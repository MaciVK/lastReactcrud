import React, { Component } from "react";
import Axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class EliminarHospital extends Component {
  state = {
    status: false,
  };

  render() {
    if (this.state.status == true) {
      <h1>Eliminado!</h1>;
    }
    return (
      <div>
        <h1>Algo ha ido mal....</h1>
      </div>
    );
  }
}
