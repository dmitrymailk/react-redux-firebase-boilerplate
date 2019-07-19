import React, { Component } from "react";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "./Spinner";

class Details extends Component {
  render() {
    const { univer } = this.props;
    console.log(this.props);
    if (univer) {
      return (
        <div>
          <Link to="/" className="btn btn-link">
            Back to Dashboard
          </Link>
          <hr />
          <br />
          <ul>
            <li>Name: {univer.name}</li>
            <li>Univer ID: {univer.id}</li>
            <li>Univer Email: {univer.email}</li>
            <li>Univer phone: {univer.phone}</li>
          </ul>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect(props => [
    {
      collection: "univers", // выполняет запрос к коллекции
      storeAs: "univer", // как будет храниться полученная записть в store, "univer"
      doc: props.match.params.id // получает информацию из url
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    univer: ordered.univer && ordered.univer[0] // как будет храниться полученная записть в props, "univer"
  }))
)(Details);
