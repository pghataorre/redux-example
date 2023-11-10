import { connect } from "react-redux";

const ProductQuantities = ({propNumberOfCakes, propNumberOfIcreams}) => {
  return (
    <div className='divider'>
      <p>Gets the data from the store using the connect() Redux Pattern</p>
      <p> Number of Cakes: <span className='items-count'>{propNumberOfCakes}</span></p>
      <p> Number of Ice creams: <span className='items-count'>{propNumberOfIcreams}</span></p>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    propNumberOfCakes: state.numberOfCakes,
    propNumberOfIcreams: state.numberOfIceCreams
  }
}

export default connect(mapStateToProps)(ProductQuantities);
