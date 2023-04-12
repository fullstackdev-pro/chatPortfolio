import * as api from "../api";

export const signIn = (formData, handleClose) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({
      type: "AUTH",
      payload: { token: data.token, profile: JSON.stringify(data.result) },
    });
    handleClose();
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, handleClose) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", payload: { token: data.token, profile: data } });
    handleClose();
  } catch (error) {
    console.log(error);
  }
};
