export default function reducer(state = {
  registering: false,
  registered: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'REGISTER': {
      return { ...state, registering: true };
    }
    case 'REGISTER_REJECTED': {
      return { ...state, registering: false, error: action.payload };
    }
    case 'REGISTER_FULFILLED': {
      return { ...state, registering: false, registered: true };
    }
    // no default
  }
  return state;
}
