const router = require("express").Router()
const {
    getallusers,
    getoneuser,
    updateuser,
    createusers,
    deleteusers,
    addfriend,
    deletefriend,
} = require("../../controllers/usercontrollers")
router.route("/").get(getallusers).post(createusers)
router.route("/:userId").get(getoneuser).put(updateuser).delete(deleteusers)
router.route("/:userId/friends/:friendid").post(addfriend).delete(deletefriend)
module.exports = router