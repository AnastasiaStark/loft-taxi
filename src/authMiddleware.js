import { logIn } from './action'
import {serverLogin} from './API'
import {AUTHANTICATE} from './action'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHANTICATE) {
        const {email,password} = action.payload
        const success = await serverLogin(email,password)
        if(success){
            store.dispatch(logIn())
        }
    } else {
        next(action)
    }

}
