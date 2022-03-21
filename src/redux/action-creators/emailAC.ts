

export const enterEmail = (email: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'enterEmail',
      payload: email
    });
  };
};
