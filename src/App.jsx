import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import BuyItemsButtons from './Components/BuyItemsButtons/BuyItemsButtons';
import BuyItemsButtonsUseSelector from './Components/BuyItemsButtonsUseSelector/BuyItemsButtonsUseSelector';
import ProductQuantities from './Components/ProductQuantities/ProductQuantities';
import ProductQuantitiesUseSelector from './Components/ProductQuantitiesUseSelector/ProductQuantitiesUseSelector';
import RestockItemsButtons from './Components/RestockItemsButtons/RestockItemsButtons';
import RestockFromInput from './Components/RestockFromInput/RestockFromInput';
import GetUsers from './Components/GetUsers/GetAUsers';
import GetAUsersUsingThunk from './Components/GetAUsersUsingThunk/GetAUsersUsingThunk';
import logger from 'redux-logger';
import './App.css';

const store = createStore(reducer, applyMiddleware(logger, thunk));
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
          <RestockFromInput />
          <GetUsers />
          <GetAUsersUsingThunk />
        </main>
      </div>
    </Provider>   
  );
}

export default App;
