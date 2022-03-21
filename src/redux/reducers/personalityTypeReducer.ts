
export const initialState = {
  E: 0,
  I : 0,
  In: 0,
  S: 0,
  F: 0,
  D: 0,
  B: 0,
  W: 0
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
  case 'increaseE':
    return {
      ...state,
      E: state.E + 1
    };
  case 'decreaseE':
    return {
      ...state,
      E: state.E - 1
    };

  case 'increaseI':
    return {
      ...state,
      I: state.I + 1
    };
  case 'decreaseI':
    return {
      ...state,
      I: state.I - 1
    };

  case 'increaseIn':
    return {
      ...state,
      In: state.In + 1
    };
  case 'decreaseIn':
    return {
      ...state,
      In: state.In - 1
    };

  case 'increaseS':
    return {
      ...state,
      S: state.S + 1
    };
  case 'decreaseS':
    return {
      ...state,
      S: state.S - 1
    };

  case 'increaseF':
    return {
      ...state,
      F: state.F + 1
    };
  case 'decreaseF':
    return {
      ...state,
      F: state.F - 1
    };

  case 'increaseD':
    return {
      ...state,
      D: state.D + 1
    };
  case 'decreaseD':
    return {
      ...state,
      D: state.D - 1
    };

  case 'increaseB':
    return {
      ...state,
      B: state.B + 1
    };
  case 'decreaseB':
    return {
      ...state,
      B: state.B - 1
    };

  case 'increaseW':
    return {
      ...state,
      W: state.W + 1
    };
  case 'decreaseW':
    return {
      ...state,
      W: state.W - 1
    };
  default:
    return state;
  }
};

export default reducer;
