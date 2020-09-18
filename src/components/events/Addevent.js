import React, { Component } from "react";
import { Consumer } from "../../context";

import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class Addevent extends Component {
  state = {
    name: "",
    region: "",
    field: "",
    errors: {},
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, region, field } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }
    if (region === "") {
      this.setState({ errors: { region: "Region is Required" } });
      return;
    }
    if (field === "") {
      this.setState({ errors: { field: "Field is Required" } });
      return;
    }

    const newEvent = {
      name,
      region,
      field,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newEvent
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //clear state
    this.setState({
      name: "",
      region: "",
      field: "",
      errors: {},
    });
    this.props.history.push("/");
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const { name, region, field, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">AddEvent</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Region"
                    name="region"
                    placeholder="Enter Region"
                    value={region}
                    onChange={this.onChange}
                    error={errors.region}
                  />
                  <TextInputGroup
                    label="Field"
                    name="field"
                    placeholder="Enter Field"
                    value={field}
                    onChange={this.onChange}
                    error={errors.field}
                  />
                  <input
                    type="submit"
                    value="Add Event"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Addevent;
