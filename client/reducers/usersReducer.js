import axios from 'axios';

// initial state
const initialState = {
  user: {},
  users: []
}

// Action Types
const GET_USER = "GET_USER";
const GET_USERS = "GET_USERS";
const NEW_USER = "NEW_USER";
const DELETE_USER = "DELETE_USER";


// Action Creators
const getUser = (user) => ({
  type: GET_USER,
  user
})

const gotUsers = (users) => ({
  type: GET_USERS,
  users
})

const userCreated = (user) => ({
  type: NEW_USER,
  user
})

const userDeleted = (userId) => ({
  type: DELETE_USER,
  userId
})

//thunks
export const userThunk = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users');
      dispatch(getUser(data));
    } catch(err) {console.log(err)}
  }
}

export const allUsersThunk = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users/all');
      dispatch(gotUsers(data));
    } catch(err) {console.log(err)}
  }
}

export const newUserThunk = (newUser) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post('/api/users', newUser);
      dispatch(userCreated(data));
    } catch(err) {console.log(err)}
  }
}

export const deleteUserThunk = (userId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/users/${userId}`);
      dispatch(userDeleted(data));
    } catch(err) {console.log(err)}
  }
}

//reducer
function usersReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user}
    case GET_USERS:
      return {...state, users: action.users}
    case DELETE_USER:
      const filteredUsers = state.users.filter(user => {
        if (user._id === action.userId) {return false}
        else {return true}
      });
      return {...state, users: filteredUsers}
    case NEW_USER:
      return {...state, user: action.user, users: [...state.users, action.user]}
  }
  return state;
}


export default usersReducer;
