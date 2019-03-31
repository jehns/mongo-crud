import axios from 'axios';

// initial state
const initialState = {
  user: {}
}

// Action Types
const GET_USER = "GET_USER";


// Action Creators
const getUser = (user) => ({
  type: GET_USER,
  user
})

export const userThunk = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users');
      dispatch(getUser(data));
    } catch(err) {console.log(err)}
  }
}


function usersReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user}
  }
  return state;
}


export default usersReducer;
