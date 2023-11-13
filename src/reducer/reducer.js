import initialState from "../initialState/initialState";
import {
  BUY_CAKE,
  BUY_ICECREAM,
  RESTOCK_CAKE,RESTOCK_ICECREAM,
  RESTOCK_CAKE_FROM_INPUT,
  RESTOCK_ICE_CREAM_FROM_INPUT,
  FETCH_API_SUCCESS,
  FETCH_API_LOADING,
  FETCH_API_FAIL
} from '../actionTypes/actionTypes';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case RESTOCK_CAKE: 
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1
      }

    case RESTOCK_ICECREAM: 
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + 1
      }  

    case BUY_CAKE: 
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }

    case BUY_ICECREAM: 
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      }

    case RESTOCK_CAKE_FROM_INPUT: 
      return {
        ...state,
        numberOfCakes: action.payload,
      }

    case RESTOCK_ICE_CREAM_FROM_INPUT: 
      return {
        ...state,
        numberOfIceCreams: action.payload,
      }

    case FETCH_API_SUCCESS: 
      return {
        ...state,
        users: action.payload,
      }

    case FETCH_API_LOADING: 
      return {
        ...state,
        loading: !state.loading,
      }

    case FETCH_API_FAIL: 
      return {
        ...state,
        apiFail: action.payload,
      }
    default: 
      return state;
  }
}

export default reducer;


