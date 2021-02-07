import mongoose from 'mongoose'
import config from 'config'

const db = config.get('MongoURI')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB