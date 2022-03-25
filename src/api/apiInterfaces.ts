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

export interface IDetailsTour {
    schedule: string
    service: string
    note: string
}
export interface ICreateTour {
    name: string
    tour: string
    schedule: string
    startDate: string
    endDate: string
    cost: number
    shortDescription: string
    details: IDetailsTour
}