export type TUser = {
  id: number
  email: string
  name: string
  password: string
  role: 'guest' | 'client' | 'manager' 
  isActive: boolean
}

export type TUserResponse = {
    accessToken: string,
    refreshToken: string,
    user: TUser
}

export type TUserRegister = {
    name: string
    email: string,
    password: string
} 

export type TUserLogin = Omit<TUserRegister, 'name'>

export type TInitialState = {
    user: TUserResponse | null
    accessToken: string | null
    refreshToken: string | null
}
