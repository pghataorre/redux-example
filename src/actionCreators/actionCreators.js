import { BUY_CAKE, BUY_ICECREAM, RESTOCK_CAKE, RESTOCK_ICECREAM } from "../actionTypes/actionTypes"

export const buyCake = (SOME_PAY_LOAD) => {

  debugger;
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


