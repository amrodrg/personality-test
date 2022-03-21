

export const enterName = (name: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'enterName',
      payload: name
    });
  };
};
