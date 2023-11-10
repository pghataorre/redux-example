import initialState from "../initialState/initialState";
import {BUY_CAKE, BUY_ICECREAM, RESTOCK_CAKE, RESTOCK_ICECREAM} from '../actionTypes/actionTypes';

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

    default: 
      return state;
  }
}

export default reducer;


