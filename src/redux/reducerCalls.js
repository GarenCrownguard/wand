// https://stackoverflow.com/a/61578718

// import axios from "axios";

import store from "./store";
import actions from "./action.types";

export const GET_FE_STATS = async (props) => {

  // store.dispatch({
  //   type: actions.GET_FE_STATS,
  //   payload: {
  //     allposts: res.data,
  //   },
  // });
};

export const UPDATE_ADDRESS = async (props) => {
  const { walletAddress } = props;
  store.dispatch({
    type: actions.UPDATE_ADDRESS,
    payload: {
      address: walletAddress,
    },
  });
};

export const WALLET_DISCONNECT = async (props) => {
  store.dispatch({
    type: actions.WALLET_DISCONNECT,
    payload: {

    }
  })
}

export const WALLET_UPDATE_STATS = async (props) => {
  store.dispatch({
    type: actions.WALLET_UPDATE_STATS,
    payload: props,
  })
}
