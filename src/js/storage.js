export const load = key => {
  try {
    const state = window.localStorage.getItem(key);
    return state === null ? undefined : JSON.parse(state);
  } catch (err) {
    console.log('Get state error', eSrr);
  }
};
export const save = (key, value) => {
  try {
    const state = JSON.stringify(value);
    window.localStorage.setItem(key, state);
  } catch (err) {
    console.log('Set state error', err);
  }
};
export const remove = key => {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.log('Remove state error', err);
  }
};

export default { load, save, remove };