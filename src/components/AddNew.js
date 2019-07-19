import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { bindActionCreators } from "redux";
import { firestore } from "firebase";
import { my_increment } from "../reducers/mydata";

class AddNew extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    count: ""
  };

  componentWillMount() {
    console.log(this.props);
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;
    console.log(newClient);

    const { firestore, history } = this.props;
    // this.props.my_increment(newClient);
    firestore
      .add(
        {
          collection: "univers"
        },
        newClient
      )
      .then(() => {
        this.props.my_increment(newClient);
        history.push("/");
      });
  };

  render() {
    return (
      <div>
        <h1>Add New</h1>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              minLength="2"
              required
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              minLength="2"
              required
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              minLength="2"
              required
              onChange={this.onChange}
              value={this.state.phone}
            />
          </div>

          <div>
            <label htmlFor="balance">Count</label>
            <input
              type="text"
              name="count"
              required
              onChange={this.onChange}
              value={this.state.count}
            />
          </div>

          <input type="submit" value="Submit" onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = props => ({
  mydata: props.mydata
});

// Добавление функций в стор, чтобы они отслеживались и работали при вызове
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      my_increment
    },
    dispatch
  );

// export default compose(firestoreConnect(mapStateToProps, mapDispatchToProps))(AddClient);

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddNew);
