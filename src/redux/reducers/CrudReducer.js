const initialState = [];
const CrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    case "DELETE_DATA":
      // return state.filter((data) => data.id !== action.payload);
      return state.filter((_, idx) => idx !== action.payload);
    case "UPDATE_DATA":
      return state.map((data) =>
        data.id === action.payload.id ? action.payload : data
      );
    // return rows.map((currRow, idx) => {
    //   if (idx !== rowToEdit) return currRow;
    //   return obj;
    // });
    default:
      return state;
  }
};

export default CrudReducer;
