

export const initialCustomer={
    fullName:"",
    id:"",
    created:"",
}


export function customerReducer(state= initialCustomer,action){
    switch(action.type){
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                id:action.payload.id,
                created:action.payload.created,
            };
        case "customer/updateName":
            return{
                ...state,
                fullName:action.payload
            }
        default:
        return state;
    }
}

export function createCustomer(fullName, id){
    return{
        type:'customer/createCustomer',
        payload:{
            fullName:fullName,
            id:id,
            created: new Date().toISOString(),
        }
    }
}

export function updateName(fullName){
    return {
        type:"customer/updateName", payload: fullName
    }
}