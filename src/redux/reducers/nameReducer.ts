

const reducer = (state = '', action: any) => {
  switch (action.type) {
  case 'enterName':
    return action.payload;
  default:
    return state;
  }

};

export default reducer;
