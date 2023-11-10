import { reStockCake, reStockIceCream } from "../../actionCreators/actionCreators";
import { useDispatch } from "react-redux";


const RestockItemsButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="divider">
      <p>Restock items using the useDispatch() Hook</p>
      <button className="add-Items-button" type='button' onClick={() => dispatch(reStockCake())}>Restock Cakes</button>
      <button className="add-Items-button" type='button' onClick={() => dispatch(reStockIceCream())}>Restock Cream</button>
    </div>
  )
}

export default RestockItemsButtons;
