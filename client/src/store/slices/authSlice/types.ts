export enum formToggle{
    SIGN_UP = 'signUp',
    SIGN_IN = 'signIn',
    LOGOUT = 'logout'
}
export type IForm = formToggle.SIGN_UP | formToggle.SIGN_IN | formToggle.LOGOUT
export interface IAuthState {
    typeForm: IForm,
    login: string,
    password: string,
    role?: string,
    error: string
}