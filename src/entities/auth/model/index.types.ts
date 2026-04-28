import type { TRoles } from "../../../shared/types/types"

export type TUser = {
    id: number
    email: string
    name: string
    password: string
    role: TRoles
    isActive: boolean
}



export type TUserRegister = Omit<TUser, "id" | "role" | "isActive">
export type TUserWOPass = Omit<TUser, "password">
export type TUserLogin = Omit<TUserRegister, 'name'>

export type TUserResponse = {
    accessToken: string,
    refreshToken: string,
    user: TUserWOPass
}

export type TInitialState = {
    isAuth: boolean;
    user: TUserWOPass | null
    accessToken: string | null
    refreshToken: string | null
}
