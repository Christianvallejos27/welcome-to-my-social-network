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
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async createusers(req, res){
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async updateuser(req, res){
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async deleteusers(req, res){
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async addfriend(req, res){
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    async deletefriend(req, res){
        try {
            
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
}

module.exports = usercontroller