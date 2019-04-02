import React from 'react';
import { newUserThunk } from '../reducers/usersReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      emailInput: "",
      passwordInput: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.newUserThunk({name: this.state.nameInput, email: this.state.emailInput, password: this.state.passwordInput});

    this.setState({
      nameInput: "",
      emailInput: "",
      passwordInput: ""
    });

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

        <label>Name</label>
        <input type="text" name="nameInput" onChange={this.handleChange} value={this.state.nameInput}/>

        <label>Email</label>
        <input type="text" name="emailInput" onChange={this.handleChange} value={this.state.emailInput}/>

        <label>Password</label>
        <input type="text" name="passwordInput" onChange={this.handleChange} value={this.state.passwordInput}/>

        <input type="submit"/>

      </form>



      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
// })

const mapDispatchToProps = (dispatch) => ({
  newUserThunk(newUser) {
    dispatch(newUserThunk(newUser));
  }
})


export default withRouter(connect(null, mapDispatchToProps)(Login));
