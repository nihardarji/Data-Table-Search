import express from 'express'
import connectDB from './config/db.js'
import searchRoutes from './routes/searchRoutes.js';

connectDB()

const app = express()

app.use(express.json())

app.use('/api/search', searchRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))