module.exports = {

    async create(req, res){
        const {login, pwd} = req.body;
        



        return res.status(200).json({login, pwd});
    }
}