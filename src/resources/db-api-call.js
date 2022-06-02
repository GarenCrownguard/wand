// https://stackoverflow.com/a/61578718

import axios from "axios";

// Redux
import store from "redux/store";

import * as actions from '../redux/action.types';

export const GET_FE_STATS = async (props) => {
  const { API_URL } = props;

  store.dispatch({
    type: actions.GET_FE_STATS,
    payload: {
      allposts: res.data,
    },
  });
};

export const GET_TRANSACTION_LIST = async (props) => {
  // Implemented filter by just userID. Filtering by ID or both should be easy with few if statements.
  const { API_URL, userId } = props;

  store.dispatch({
    type: actions.GET_TRANSACTION_LIST,
    payload: {
      userId: userId,
    },
  });
};
