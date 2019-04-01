import axios from 'axios';

// initial state
const initialState = {
  user: {},
  users: []
}

// Action Types
const GET_USER = "GET_USER";
const NEW_USER = "NEW_USER";


// Action Creators
const getUser = (user) => ({
  type: GET_USER,
  user
})

const userCreated = (user) => ({
  type: NEW_USER,
  user
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

//get all users (not used)
export const allUsersThunk = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users');
      dispatch(getUser(data));
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

//reducer
function usersReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user}
    case NEW_USER:
      return {...state, user: action.user, users: [...state.users, action.user]}
  }
  return state;
}


export default usersReducer;
