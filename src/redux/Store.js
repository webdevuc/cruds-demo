import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CrudReducer from "./reducers/CrudReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  card: CrudReducer,
});
let initialState = {};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
  
export default Store;
