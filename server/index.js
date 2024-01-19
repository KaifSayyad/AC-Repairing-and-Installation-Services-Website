import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import serviceRouter from './Routes/serviceRoutes.js'
import productRouter from './Routes/productRoutes.js'
import sparePartRouter from './Routes/sparePartRoutes.js'

/* setting up server */
const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

/* setting up database and starting the server 
  SET YOUR MONGO URL AND PORT IN .env FILE */


mongoose.connect(process.env.MONGO_URL).then(
  app.listen(process.env.PORT, () => console.log(`Server running on port: http://localhost:${process.env.PORT}/`))
).catch((error) => console.log(error.message))

/* setting up routes */

// set up your routes here
app.use('/api/service', serviceRouter)
app.use('/api/product', productRouter)
app.use('/api/sparepart', sparePartRouter)

export default app