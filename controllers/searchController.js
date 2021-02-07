import SearchItem from "../models/SearchItemModel.js"

const searchItems = async (req, res) => {
    try {
        const query = req.query.q ? {
            title: {
                $regex: new RegExp(req.query.q),
                $options: 'i'
            }
        } : {}
        const result = await SearchItem.find({ ...query })
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }
}

export {
    searchItems
}