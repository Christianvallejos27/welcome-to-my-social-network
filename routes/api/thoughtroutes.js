const router = require("express").Router()
const {
    getallthought,
    getonethought,
    updatethought,
    createthought,
    deletethought,
    addthought,
} = require("../../controllers/thoughtcontrollers")
router.route("/").get(getallthought).post(createthought)
router.route("/:thoughtid").get(getonethought).put(updatethought).delete(deletethought)
router.route("/:thoughtid").post(addthought)
module.exports = router