export const checkFormFields = (state) => {
  let res = {};

  if (state.password !== state.repeatPassword) {
    res["repeatPassword"] = "Estos campos deben coincidir";
    res["password"] = "Estos campos deben coincidir";
  }

  if (
    state.password?.length < 8 ||
    state.password?.length > 24 ||
    !state.password?.match(/[A-Z]/g) ||
    !state.password?.match(/[0-9]/g)
  )
    res["password"] = "Mín 8 car. y max 8 car. Debe contener 1 núm y 1 mayús.";
  if (
    state.repeatPassword?.length < 8 ||
    state.repeatPassword?.length > 24 ||
    !state.repeatPassword?.match(/[A-Z]/g) ||
    !state.repeatPassword?.match(/[0-9]/g)
  )
    res["repeatPassword"] =
      "Mín 8 car. y max 8 car. Debe contener 1 núm y 1 mayús.";

  if (!state.username) res["username"] = "El campo es obligatorio";
  if (!state.password) res["password"] = "El campo es obligatorio";
  if (!state.repeatPassword) res["repeatPassword"] = "El campo es obligatorio";

  return Object.keys(res).length > 0 ? res : false;
};
