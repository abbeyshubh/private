export default function catReducer(state = {}, action) {
  switch (action.type) {
    case "GETCATS":
      return {
        ...state,
        catData: action.payload
      };
    default:
      return state;
  }
}
