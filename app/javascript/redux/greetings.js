
import Axios from 'axios';

const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

const getGreetings = (payload) => ({
  type: GET_GREETING,
  payload,
});

const initialState = [];

export const getGreetingsFromApi = () => async (dispatch) => {
  const result = await Axios.get('/v1/greetings');
  const data = result.data.greetings.message
  dispatch(getGreetings(data));
};

const reducerGreetings = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducerGreetings;