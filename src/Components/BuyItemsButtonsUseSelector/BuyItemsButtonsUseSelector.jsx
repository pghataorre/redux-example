import { buyCake, buyIceCream } from "../../actionCreators/actionCreators";
import { useDispatch } from "react-redux";


const BuyItemsButtonsUseSelector = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Buy items using the useDispatch() Hook</h3>
      <button type='button' onClick={() => dispatch(buyCake('go some shit to send'))}>Buy Cakes</button>
      <button type='button' onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default BuyItemsButtonsUseSelector;
