import { ADD_TO_CART } from "../Constants/CartConstants";





const addToCart = (items, checkboxValue, restaurantName) => { 
    try {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          items,
            checkboxValue,
          restaurantName
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
       

export default addToCart;
