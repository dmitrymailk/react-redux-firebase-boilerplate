export const MY_INCREMENT = "mydata/MY_INCREMENT";

const initialState = {
  myData: [2, 3, 4, 5, 6],
  something: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MY_INCREMENT:
      let myData = [action.payload, ...state.myData];
      console.log("ACTION_PAY", action);
      return {
        ...state,
        myData
      };
    default:
      return state;
  }
};

export const my_increment = item => dispatch => {
  dispatch({
    type: MY_INCREMENT,
    payload: item
  });
};
