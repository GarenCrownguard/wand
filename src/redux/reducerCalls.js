// https://stackoverflow.com/a/61578718

// import axios from "axios";

import store from "./store";
import actions from "./action.types";

export const UPDATE_ADDRESS = (props) => {
  const { walletAddress } = props;
  store.dispatch({
    type: actions.UPDATE_ADDRESS,
    payload: {
      address: walletAddress,
    },
  });
};

export const WALLET_DISCONNECT = () => {
  store.dispatch({
    type: actions.WALLET_DISCONNECT,
    payload: {

    }
  })
}

export const WALLET_UPDATE_STATS = (props) => {
  store.dispatch({
    type: actions.WALLET_UPDATE_STATS,
    payload: props,
  })
}

export const UPDATE_STATS = (props) => {
  store.dispatch({
    type: actions.UPDATE_STATS,
    payload: props,
  })
}

export const UPDATE_OUTSTANDING_STATS = (props) => {
  store.dispatch({
    type: actions.UPDATE_OUTSTANDING_STATS,
    payload: props,
  })
}

export const UPDATE_RISK_TREASURY_VALUE = (props) => {
  store.dispatch({
    type: actions.UPDATE_RISK_TREASURY_VALUE,
    payload: props,
  })
}

export const UPDATE_INVESTMENT_LIST = (props) => {
  store.dispatch({
    type: actions.UPDATE_INVESTMENT_LIST,
    payload: props,
  })
} 

export const UPDATE_AIRDROPS = (props) => {
  store.dispatch({
    type: actions.UPDATE_AIRDROPS,
    payload: props,
  })
}