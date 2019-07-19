import React, { Component } from "react";
import Spinner from "./Spinner";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Home extends Component {
  render() {
    const { univers } = this.props;

    if (univers) {
      return (
        <div>
          <h1>Home</h1>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Кол-во Людей</th>
              </tr>
            </thead>
            <tbody>
              {univers.map(univer => (
                <tr key={univer.id}>
                  <td>{univer.name}</td>
                  <td>{univer.email}</td>

                  <td>{univer.count ? univer.count : 0} ч</td>
                  <td>
                    <Link to={`/details/${univer.id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect([
    {
      collection: "univers"
    }
  ]),
  connect((state, props) => ({
    univers: state.firestore.ordered.univers
  }))
)(Home);
