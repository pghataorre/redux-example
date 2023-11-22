import { 
  BUY_CAKE,
  BUY_ICECREAM,
  RESTOCK_CAKE,
  RESTOCK_ICECREAM,
  RESTOCK_CAKE_FROM_INPUT,
  RESTOCK_ICE_CREAM_FROM_INPUT,
  FETCH_API_SUCCESS,
  FETCH_API_FAIL,
  FETCH_API_LOADING
} from "../actionTypes/actionTypes";

import { getApi } from "../api/api";

export const buyCake = (SOME_PAY_LOAD) => {
  return {
    type: BUY_CAKE,
    payload: SOME_PAY_LOAD
  }
}

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  }
}

export const reStockCake = () => {
  return {
    type: RESTOCK_CAKE,
  }
}

export const reStockIceCream = () => {
  return {
    type: RESTOCK_ICECREAM,
  }
}

export const reStockCakesFromInputNumber = (numberOfCakes) => {
  return {
    type: RESTOCK_CAKE_FROM_INPUT,
    payload: Number(numberOfCakes),
  }
}

export const reStockIceCreamFromInputNumber = (numberOfIceCreams) => {
  return {
    type: RESTOCK_ICE_CREAM_FROM_INPUT,
    payload: Number(numberOfIceCreams)
  }
}

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_API_SUCCESS,
    payload: users
  }
}

export const fetchUserFail = (hasFailed) => {
  return {
    type: FETCH_API_FAIL,
    payload: hasFailed
  }
}

export const setLoading = () => {
  return {
    type: FETCH_API_LOADING,
  }
}

export const fetchUserUsingThunk = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    dispatch(fetchUserFail(false)); 

    try {
      const users = await getApi();
      dispatch(fetchUserSuccess(users));
      dispatch(setLoading());

    } catch (error) {
      dispatch(setLoading());
      dispatch(fetchUserFail(true));
      console.log('error in fetch action creator === ',  error);
    }
  }
}