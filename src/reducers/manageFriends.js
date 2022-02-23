export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, action.friend],
      };
      break;
    case "REMOVE_FRIEND":
      return {
        ...state,
        friends: [...state.friends].filter((f) => f.id != action.id),
      };
      break;
    default:
      return state;
      break;
  }
}
