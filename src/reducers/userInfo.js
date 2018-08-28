const userInfoState = {
  name: 'Candy'
};

export default function user(state = userInfoState, action) {
  switch (action.type) {
    case 'GOT_USER':
      console.log('user info', action.user);
      return action.user;

    default:
      return state;
  }
}
