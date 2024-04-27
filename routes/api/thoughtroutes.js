const router = require("express").Router()
const {
    getallthoughts,
    getonethought,
    updatethought,
    createthought,
    deletethought,
    addthought,
} = require("../../controllers/thoughtcontrollers")
router.route("/").get(getallthoughts).post(createthought)
router.route("/:thoughtid").get(getonethought).put(updatethought).delete(deletethought)
router.route("/:thoughtid").post(addthought)
module.exports = router