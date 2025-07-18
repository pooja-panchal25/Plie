const initialState = {
  items: [],
};

const wishlistReducer = (state = initialState, action: { type: any; payload: { event_id: any; }; }) => {
  switch (action.type) {
case 'ADD_TO_WISHLIST':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter(item => item.event_id !== action.payload.event_id),
      };

    default:
      return state;
  }
};
export default wishlistReducer;
