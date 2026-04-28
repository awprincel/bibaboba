export const env = import.meta.env

export const CONFIG = {
    SERVER_URL: env.APP_SERVER_URL
} as const

export const BASE_URL = CONFIG.SERVER_URL