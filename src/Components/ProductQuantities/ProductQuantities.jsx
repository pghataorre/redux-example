import { connect } from "react-redux";

const ProductQuantities = ({propNumberOfCakes, propNumberOfIceCreams}) => {
  return (
    <div className='divider'>
      <p>Gets the data from the store using the connect() Redux Pattern</p>
      <p> Number of Cakes: <span className='items-count'>{propNumberOfCakes}</span></p>
      <p> Number of Ice creams: <span className='items-count'>{propNumberOfIceCreams}</span></p>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    propNumberOfCakes: state.numberOfCakes,
    propNumberOfIceCreams: state.numberOfIceCreams
  }
}

export default connect(mapStateToProps)(ProductQuantities);
