import React, { useReducer } from 'react';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 10
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 12.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 8
  }
];

// --------------------------------------------
// !!! DO NOT MODIFY ABOVE THIS LINE !!!
// --------------------------------------------

// YOUR MAY ADD ANY ADDITIONAL FUNCTIONS HERE IF YOU NEED, NAMELY THE computeTotal(), etc.

function reducer(state, action) {
  switch(action.type) {
    // YOUR CODE HERE
    case "add":
      // console.log([...state]); //logs before new item is added to cart
      return [...state, action.product]; //get state and add the new product to the end of the array
    case "remove":
      const index = state.findIndex(item => item == action.product); //find where the first item that is trying to be removed is found
      if(index != -1) { //if it exists...
        return [...state.slice(0, index), ...state.slice(index+1)]; // take it out and add the two halves of the array back together
      }  else{ //if it doesn't exist
        return state; //just return the array
      }
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, []);

  // YOUR CODE HERE
  const computeTotal = (state) => {
    return state.reduce((total, product) => total + product.price, 0);
  }
  const add = (product) => {
    dispatch({type: "add", product});
  };
  const remove = (product) => {
    dispatch({type: "remove", product});
  };

// --------------------------------------------
// !!! DO NOT MODIFY BELOW THIS LINE !!!
// --------------------------------------------
  return(
    <>
      <div>
        Total Items in Shopping Cart: {state.length}
      </div>
      <div>Total Cost: ${computeTotal(state)}</div>

      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span>{product.emoji}</span>
            </div>
            <div>Price ${product.price}</div>
            <button onClick={() => add(product)}>Add</button>
            <button onClick={() => remove(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}
export default App;