import 'dotenv/config';

export const SFTP_USER = assertValue(
    process.env.SFTP_USER,
    'SFTP_USER not configured'
)

export const SFTP_HOST = assertValue(
    process.env.SFTP_HOST,
    'SFTP_HOST not configured'
)

export const SFTP_PORT = assertValue(
    process.env.SFTP_PORT,
    'SFTP_PORT not configured'
)

export const RSA_PATH = assertValue(
    process.env.RSA_PATH,
    'RSA_PATH not configured'
)

export const SERVER_FILE_PATH = assertValue(
    process.env.SERVER_FILE_PATH,
    'SERVER_FILE_PATH not configured'
)

function assertValue(v, errorMessage) {
    if (v === undefined) {
        console.log(v)
        throw new Error(errorMessage)
    }
    return v
}