const INITIAL_STATE = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  }

  export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
      case 'SPEND_BALANCE':
        return {
          ...state,
          user: { ...state.user, balance: state.user.balance - action.spendAmount }
        }
  
      default:
        return state
    }
  }