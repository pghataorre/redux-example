import { buyCake, buyIceCream } from "../../actionCreators/actionCreators";
import { connect } from "react-redux";

const BuyItemsButtons = (props) => {
  return (
    <div>
      <h3>Buy items using the connect() Redux Pattern</h3>
      <button type='button' onClick={props.buyCake}>Buy Cakes</button>
      <button type='button' onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

// GOTCHA --- Left in code to show an example of connect WITHOUT a mapStateToProps
// const mapStateToProps = (state) => {
//   return {
//     numberOfCakes: state.numberOfCakes
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    // GOTCHA --- name sure theres a function call then call dispatch
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
  }
}

// GOTCHA --- YOU DON'T HAVE TO SEND mapStateToProps, but MUST send in null as the first Param to connect()
export default connect(null, mapDispatchToProps)(BuyItemsButtons);
