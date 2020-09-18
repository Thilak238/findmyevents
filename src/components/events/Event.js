import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Event extends Component {
  state = {
    showEventInfo: false,
  };

  onShowClick = (e) => {
    this.setState({
      showEventInfo: !this.state.showEventInfo,
    });
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, region, field } = this.props.event;
    const { showEventInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h3>
                Event name : {name}
                <i onClick={this.onShowClick} className="fas fa-angle-down" />
                <button
                  type="button"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ float: "right", fontSize: "15px" }}
                >
                  Delete
                </button>
              </h3>
              {showEventInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Region: {region}</li>
                  <li className="list-group-item">Field: {field}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Event.propTypes = {
  event: PropTypes.object.isRequired,
};
export default Event;
