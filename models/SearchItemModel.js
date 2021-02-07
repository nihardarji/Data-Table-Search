import mongoose from 'mongoose'

const searchSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    publicationDate: {
        type: Date
    },
    averageRating: {
        type: Number
    }
}, {
    timestamps: true
})

const SearchItem = mongoose.model('SearchItem', searchSchema)

export default SearchItem