import {combineReducers, createStore} from 'redux'
import {reducer} from './components/features/account/accountSlice'
import { customerReducer, createCustomer } from './components/features/customer/customerSlice';

const rootReducer = combineReducers({
    account: reducer,
    customer: customerReducer,
})

 const store = createStore(rootReducer);


// calling the functions
// store.dispatch(deposit(500))
// store.dispatch(withdraw(100))

store.dispatch(createCustomer("Fayaz","KBF2252"))
// store.dispatch(updateName("Fayaz E A"))


// store.dispatch({type:"account/payloan", payload:900})

// console.log(store.getState());

export default store;