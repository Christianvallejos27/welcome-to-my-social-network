const router = require("express").Router()
const {
    getallthought,
    getonethought,
    updatethought,
    createthought,
    deletethought,
} = require("../../controllers/thoughtcontrollers")
router.route("/").get(getallthought).post(createthought)
router.route("/:thoughtId").get(getonethought).put(updatethought).delete(deletethought)
module.exports = router