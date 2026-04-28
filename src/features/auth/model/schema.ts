import z from 'zod'

export const RegisterSchema = z.object({
    name: z.string().min(3, 'Минимум 3 символа'),
    email: z.string().email('Введите корреткную почту'),
    password: z.string().min(6, 'Минимум 6 символов')
})

export type TRegisterSchema = z.infer<typeof RegisterSchema>




export const LoginSchema = z.object({
    email: z.string().email('Введите корреткную почту'),
    password: z.string().min(6, 'Минимум 6 символов')
})

export type TLoginSchema = z.infer<typeof LoginSchema>