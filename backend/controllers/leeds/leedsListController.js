import Leeds from "../../models/leeds.js";

async function leedsListController(req, res) {
    const leeds = await Leeds.findAll()
    return res.json(leeds)
}

export default leedsListController