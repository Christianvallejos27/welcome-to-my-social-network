const{User, Thought} = require("../models")

const thoughtcontrollers = {
    async getallthought(req, res){
        try {
            const allthought = await thought.find().select("-__v")
            res.json(allthought)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async getonethought(req, res){
        try {
            const onethought = await thought.findOne({_id:req.params.userId}).select("-__v").populate("thoughts")
            res.json(onethought)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },

    async createthought(req, res){
        try {
            try {
                const thought = await thought.create(req.body);
                res.json(thought);
                
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },


     updatethought(req, res){
        try {
        
                const thought= await thought.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $set: req.body },
                    { runValidators: true, new: true }
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        };
    }

    async deletethought(req, res){
        try {
            const thought = await thought.findOneAndDelete({ _id: req.params thoughtId });
            await thought.deleteMany({ _id: { $in: thought } });

        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
}


async addthought(req, res){
    try {
        const friend = await thought.findOneAndUpdate(
            { _id: req.params thoughtId },
            { $addToSet: { responses: req.body } },
            { runValidators: true, new: true }
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
},


module.exports = thoughtcontrollers