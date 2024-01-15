const {PulseProd} = require("../models/PulseProd.model")

const PulseProdController = {
    getAll: async(req, res)=>{
        try{
            const data = await PulseProd.find({})
            res.send(data).status(200)
        } catch(err){
            res.send(err).status(400)
        }
    },
    getById: async (req, res) => {
        try {
          const { id } = req.params;
          const data = await PulseProd.findById(id);
          res.send(data).status(200);
        } catch (err) {
          res.send(err).status(404);
        }
      },
      add: async (req, res) => {
        try {
          const { title, desc, price, ingredient, img } = req.body;
          const newProd = new PulseProd({ title, desc, price, ingredient, img });
          await newProd.save();
          res.send(newProd).status(200);
        } catch (err) {
          res.send(err).status(404);
        }
      },
      delete: async (req, res) => {
        try {
          const { id } = req.params;
          await PulseProd.findByIdAndDelete(id);
          const allData = await PulseProd.find({});
          res.send(allData).status(203);
        } catch (err) {
          res.send(err);
        }
      },
}

module.exports = {PulseProdController}