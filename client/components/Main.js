import React from 'react';
import { connect } from 'react-redux';
import { userThunk } from '../reducers/usersReducer';
import Login from './Login';
import {Switch, withRouter, Route} from 'react-router-dom';


class Main extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.userThunk();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/users' component={Users}/>
          <Route exact path='/users/:id' component={Profile}/> */}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  userThunk() {
    dispatch(userThunk());
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
