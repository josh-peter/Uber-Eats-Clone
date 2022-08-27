import {ADD_TO_CART} from "../Constants/CartConstants";



let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {

      if (action.payload.checkboxValue) {
        state.selectedItems = {
          items: [...state.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      }else {
        console.log("REMOVE FROM CART");
        state.selectedItems = {
          items: [
            ...state.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(state.selectedItems);
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
