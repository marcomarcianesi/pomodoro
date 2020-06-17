const initialState = {
  breakSeconds: 3,
  workSeconds: 6 
};

export default function(state = initialState, action) {
  console.log("received action", action)
  switch(action.type) {
    case 'APPLY_SETTINGS': {
      const newState = {
        ...state,
        workSeconds: action.payload.workSeconds,
        breakSeconds: action.payload.breakSeconds
      }
      return newState
    }
    default: 
      return state;
  }
  
}