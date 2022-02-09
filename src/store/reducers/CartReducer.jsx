const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
}


const CartReducer = (state = initState, action) =>{
    let findPro;
    let index;
    switch(action.type){

        case 'ADD_TO_CART':
            const { product, quantity} = action.payload;
       console.log( typeof product.id, quantity);
            const check = state.products.find(produc => produc.id === product.id);
            if(check){
                return state;
            }else{
                const tPrice = state.totalPrice + product.discountPrice * quantity; 
                const tQuantities = state.totalQuantities + quantity;
                product.quantity = quantity;
                return{
                    ...state, products: [...state.products, product],
                    totalPrice: tPrice,
                    totalQuantities: tQuantities,
                }
            }

            case 'INC':
                findPro = state.products.find(product => product.id === action.payload);
                index = state.products.findIndex(product => product.id === action.payload);
                findPro.quantity += 1;
                state.products[index] = findPro;
                return{
                    ...state,
                    totalPrice: state.totalPrice + findPro.discountPrice,
                    totalQuantities: state.totalQuantities + 1,
                } 

            case 'DEC':
                findPro = state.products.find(product => product.id === action.payload);
                index = state.products.findIndex(product => product.id === action.payload);
                if(findPro.quantity > 1){
                    findPro.quantity -= 1;
                    state.products[index] = findPro;
                    return{
                        ...state,
                        totalPrice: state.totalPrice - findPro.discountPrice,
                        totalQuantities: state.totalQuantities -1,
                    }
                }else{
                    return state;
                }

            case 'REMOVE':
                findPro = state.products.find(product => product.id === action.payload);
                const filtered = state.products.filter(product => product.id !== action.payload);
                return{
                    ...state,
                    products: filtered,
                    totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
                    totalQuantities: state.totalQuantities - findPro.quantity,
                }

        default:
            return state;
    }
}

export {CartReducer};  