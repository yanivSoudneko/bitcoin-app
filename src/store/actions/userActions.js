import { userService } from '../../Services/UserService'


export function loadUser() {
    return async dispatch => {
        const user = await userService.getUser()
        dispatch({ type: 'SET_USER', user })
    }
}


export function auth(name){
    return async dispatch =>{
        const loggedInUser = await userService.signup(name)
        dispatch({type:'SET_USER',user:loggedInUser})
    }
}