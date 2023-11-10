import { useSelector } from "react-redux";

const ProductQuantitiesUseSelector = () => {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const numberOfIceCreams = useSelector((state) => state.numberOfIceCreams);

  return (
    <div className='divider'>
      <p>Gets the data from the store using useSelector() Hook</p>
      <p> Number of Cakes: <span className='items-count'>{numberOfCakes}</span></p>
      <p> Number of Ice creams: <span className='items-count'>{numberOfIceCreams}</span></p>
    </div>
  )
}

export default ProductQuantitiesUseSelector;


