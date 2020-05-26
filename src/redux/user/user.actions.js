import userActionTypes from "./user.types"

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})


export const SignInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})


export const SignInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})


export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = user => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = user => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})


export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (userDetails) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userDetails
})


export const signUpSuccess = user => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: user
})


export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})