const{User, Thought} = require("../models")

const usercontroller = {
    async getallusers(req, res){
        try {
            const allusers = await User.find().select("-__v")
            res.json(allusers)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async getoneuser(req, res){
        try {
            const oneuser = await User.findOne({_id:req.params.userId}).select("-__v").populate("friends").populate("thoughts")
            res.json(oneuser)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async createusers(req, res){
        try {
            try {
                const user = await User.create(req.body);
                res.json(user);
                
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async updateuser(req, res){
        try {
        
                const user = await user.findOneAndUpdate(
                    { _id: req.params userId },
                    { $set: req.body },
                    { runValidators: true, new: true }
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async deleteusers(req, res){
        try {
            const friend = await friend.findOneAndDelete({ _id: req.params friendId });
            await Student.deleteMany({ _id: { $in: friend.students } });

        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async addfriend(req, res){
        try {
            const friend = await friend.findOneAndUpdate(
                { _id: req.params userId },
                { $addToSet: { responses: req.body } },
                { runValidators: true, new: true }
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async deletefriend(req, res){
        try {
            const friend = await friend.findOneAndDelete({ _id: req.params friendId });
            await Student.deleteMany({ _id: { $in: friend.students } });

        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
}

module.exports = usercontrollers