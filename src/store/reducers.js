
const intialState ={
    
        cart:[]
}

const Reducers = (state= intialState , action)=> {
    switch (action.type) {
        case 'ADD_TO_CART':{
            return{
                cart:[
                    ...state.cart,
                    {
                        product:action.productInfo,
                        quantity:action.quantity
                    }
                ]
            }
        }
        case 'Delete_From_Cart':{
            let item_index = action.index;
            const new_state ={...state};
            delete new_state.cart[item_index];
            return new_state;
        }
    
        default:
            return state;
    }
}
export default Reducers;