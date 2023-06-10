import tracksRepository from '../repositories/tracks.js'
const getItems = async (req, res) => {
    const data = await tracksRepository.getAll()
    res.send(data)
}

const getItem = async (req, res) => {
    const { id } = req.params;
    const track = await tracksRepository.getById(id);
    res.send(track)
}

const createItem = async (req, res) => {
    const { body } = req;
    const data = await tracksRepository.save(body)
    res.send(data)

}

const updateItem = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const track = await tracksRepository.getById(id);
    for (let key in body) {
        if (track[key])
            track[key] = body[key];
    }
    const data = await tracksRepository.save(track);
    res.send(data)
}

const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await tracksRepository.deleteById(id);
        if (data.deletedCount === 0) {
            res.send({ deleted: false })
        } else {
            res.send({ deleted: true })
        }
    } catch (err) {
        res.send({ status: 500 })
    }

}

export { getItems, getItem, createItem, updateItem, deleteItem }