import { reStockCakesFromInputNumber, reStockIceCreamFromInputNumber } from "../../actionCreators/actionCreators";
import { useDispatch, useSelector } from "react-redux";


const RestockFromInput = () => {
  const dispatch = useDispatch();
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const numberOfIceCreams = useSelector((state) => state.numberOfIceCreams);

  return (
    <div className="divider">
      <p>Restock items using the useDispatch() and passing values into the Redux Store</p>
      
      <label htmlFor='numberOfCakes'>Number of cakes:
      <input 
        id='numberOfCakes' 
        type='number' 
        onChange={(event) => dispatch(reStockCakesFromInputNumber(event.target.value))} 
        max='250' 
        min='1' 
        value={numberOfCakes}
      />
      
      </label>
      <label htmlFor="numberOfIceCreams">Number of Ice Creams:
      <input 
        id='numberOfIceCreams' 
        type='number' 
        onChange={(event) => dispatch(reStockIceCreamFromInputNumber(event.target.value))} 
        max='250' 
        min='1' 
        value={numberOfIceCreams}
      />
      </label>
    </div>
  )
}

export default RestockFromInput;
