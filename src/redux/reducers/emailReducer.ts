

const reducer = (state = '', action: any) => {
  switch (action.type) {
  case 'enterEmail':
    return action.payload;
  default:
    return state;
  }

};

export default reducer;
