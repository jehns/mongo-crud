import React from 'react';
import { connect } from 'react-redux';
import { userThunk, allUsersThunk, deleteUserThunk } from '../reducers/usersReducer';
import Login from './Login';
import {Switch, withRouter, Route} from 'react-router-dom';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {}
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.userThunk();
    this.props.allUsersThunk();
  }

  handleDelete(userId) {
    this.props.deleteUserThunk(userId)
  }

  render() {
    return (
      <div>
      <h2>Mongo CRUD App</h2>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/users' component={Users}/>
          <Route exact path='/users/:id' component={Profile}/> */}
        </Switch>
      <p>click user to delete</p>
      <ul>
        {this.props.users ? this.props.users.map(user => {
          return <li key={user._id} onClick={() => this.handleDelete(user._id)}>{user.name}</li>
        }): ""}
      </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  userThunk() {
    dispatch(userThunk());
  },
  allUsersThunk() {
    dispatch(allUsersThunk());
  },
  deleteUserThunk(userId) {
    dispatch(deleteUserThunk(userId));
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
