export function manageFriends(state = { friends: [] }, action) {
  let current_state;
  switch (action.type) {
    case "ADD_FRIEND":
      current_state = { ...state };
      current_state.friends = [...current_state.friends];
      current_state.friends.push(action.friend);
      return current_state;
      break;
    case "REMOVE_FRIEND":
      current_state = { ...state };
      current_state.friends = [...current_state.friends].filter(
        (f) => f.id !== action.id
      );
      return current_state;
      break;
    default:
      return state;
      break;
  }
}
