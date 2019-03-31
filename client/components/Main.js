import React from 'react';
import { connect } from 'react-redux';
import { userThunk } from '../reducers/usersReducer';


class Main extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.userThunk();
  }

  render() {
    return (
      <ol>
      {this.props.user ? <li>
        {this.props.user.name}
      </li> : <p>hi</p>}
      </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
