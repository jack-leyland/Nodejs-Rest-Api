import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import { dbconnect } from './config/bd'

const app = express()


import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './config/config.env' })
}

//don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
    app.use(logger("dev"));
}


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


//To allow cross-origin requests
app.use(cors())

import bookRoute from './src/routers/book'

app.use('/api/v1', bookRoute)

// DB connection
dbconnect(process.env.DB_URL)

export default app