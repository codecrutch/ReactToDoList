const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  debugger
  return next(action);
};

export default thunk;
