const applicationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_APPLICATION":
      return [...state, action.payload];
    case "FETCH_APPLICATION":
      return action.payload;
    case "DELETE_APPLICATION":
      return state.filter((application) => application._id !== action.payload);
    default:
      return state;
  }
};
export default applicationReducer;
