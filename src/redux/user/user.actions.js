//action creater function which just create object
// to make sure that each object os in current expected format
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
