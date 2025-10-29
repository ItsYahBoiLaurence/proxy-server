import express from 'express'
import multer from 'multer'
import path from 'path'
import Client from 'ssh2-sftp-client'
import fs from 'fs'
import {
    SFTP_USER,
    SFTP_PORT,
    SFTP_HOST,
    RSA_PATH,
    SERVER_FILE_PATH
} from './env.js'

const app = express()
const PORT = 3000
const HOST = '0.0.0.0'

const upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
    res.send('Hello world! This is express server.')
})

app.get('/testUpload', async (req, res) => {
    const sftp = new Client()

    try {
        await sftp.connect({
            host: SFTP_HOST,
            port: SFTP_PORT,
            username: SFTP_USER,
            password: SFTP_PASSWORD,
            privateKey: fs.readFileSync(RSA_PATH),
        })
        await sftp.end()
    } catch (e) {
        console.log(e)
    }
})

app.post('/uploadFile', upload.single('file'), async (req, res) => {
    // const sftp = new Client()
    // const localFilepath = req.file.path
    // const remoteFilePath = "server file path"

    // try {
    //     await sftp.connect({
    //         host: SFTP_HOST,
    //         port: SFTP_PORT,
    //         username: SFTP_USER,
    //         privateKey: fs.readFileSync(RSA_PATH),
    //         password: ""
    //     })

    // } catch (e) {
    //     console.log(e)
    // } finally {
    //     await sftp.end()
    // }
})

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})