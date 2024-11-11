import "dotenv/config"

const port = Number(process.env.PORT)

export const env = (name, defaultValue) => {
    const value = process.env[name];
    if (value) return value;

    if (defaultValue) return defaultValue

    throw new Error(`Missing process.env[${name}]`)
}