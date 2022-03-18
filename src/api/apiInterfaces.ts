export interface ILogin {
    usernameOrEmail: string,
    password: string
}

export interface ISignUp {
    email: string,
    name: string,
    username: string,
    password: string
}

export interface IBooking {
    userID: number 
    tourID: number
}