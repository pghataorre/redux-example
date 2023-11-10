import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import BuyItemsButtons from './Components/BuyItemsButtons/BuyItemsButtons';
import BuyItemsButtonsUseSelector from './Components/BuyItemsButtonsUseSelector/BuyItemsButtonsUseSelector';
import ProductQuantities from './Components/ProductQuantities/ProductQuantities';
import ProductQuantitiesUseSelector from './Components/ProductQuantitiesUseSelector/ProductQuantitiesUseSelector';
import RestockItemsButtons from './Components/RestockItemsButtons/RestockItemsButtons';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import './App.css';



const store = createStore(reducer, applyMiddleware([ReduxThunk, logger]));
store.subscribe(() => console.log('updated State =', store.getState()));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="App-header">
          <h1>REDUX EXAMPLE</h1>
          <BuyItemsButtons />
          <ProductQuantities />  
          <BuyItemsButtonsUseSelector />  
          <ProductQuantitiesUseSelector />
          <RestockItemsButtons />
        </main>
      </div>
    </Provider>   
  );
}

export default App;
