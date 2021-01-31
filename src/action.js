export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHANTICATE = 'AUTHANTICATE'

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({
    type: LOG_OUT})
export const authanticate = (email, password) => ({
    type: AUTHANTICATE,
    payload: {email, password},
})
