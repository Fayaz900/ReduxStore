import {createStore} from 'redux'

const initialState={
    balance:0,
    loan:0,
    loanPurpose:"",
}

function reducer(state = initialState, action){
    switch(action.type){
        case "account/deposit":
            return{...state, balance:state.balance+action.payload};
        case "account/withdraw":
            return{...state, balance:state.balance - action.payload};
        case "account/requestLoan":
            if(state.loan>0) return state;
            return{...state, loan: action.payload.amount,
            loanPurpose: action.payload.purpose,
            balance: state.balance+ action.payload.amount} 
        case 'account/payloan':
            return{
                ...state,
                loan:0,
                loanPurpose:"",
                balance: state.balance - state.loan,
            };
        default:
            return state   
    }
}

const store = createStore(reducer);

function deposit(amount){
    return{type:"account/deposit", payload: amount}
}

function withdraw(amount){
    return{type:"account/withdraw", payload:amount}
}

function requestLoan(){

    return{type:"account/requestLoan", payload:{
        amount:1000, purpose:"Buy ps5"
    }}


}


// calling the functions
store.dispatch(deposit(500))
store.dispatch(withdraw(100))




// store.dispatch({type:"account/payloan", payload:900})

console.log(store.getState());