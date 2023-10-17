const applicationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_APPLICATION":
      return [...state, action.payload];
    case "FETCH_APPLICATION":
      return action.payload;
  }
};
export default applicationReducer;
