const Shoe = require("../modules/Shoes")

module.exports.home_get = async (req,res) => {
    try {
        const shoeDB = await Shoe.aggregate([
            {
              '$sort': {
                'createdAt': -1
              }
            }, {
              '$limit': 10
            }
          ]);
        res.render("index", {productresult: shoeDB})
    }
    catch(err){
        console.log(err);
        res.status(400)
    }

}

module.exports.shoe_post = async (req, res) => {

    const {title, model, brand, price, articleNumber} = req.body;
    
    try {
        const product = await Shoe.create({title, model, brand, price, articleNumber});
        res.status(201).json(product);
    }
    catch(err){
        res.status(400)
    }
    
    }


module.exports.login_get = async (req,res) => {
    try {
        res.render("login")
    }
    catch(err){
        console.log(err);
        res.staus(400)
    }

}

module.exports.admin_get = async (req,res) => {
    try {
        res.render("admin")
    }
    catch(err){
        console.log(err);
        res.staus(400)
    }

}


module.exports.shoe_post = async (req,res) => {
    const{model, title, price, brand} = req.body
    console.log("gaming")
    const articleNumber = Math.floor(Math.random() * 9000000000000) + 1000000000000;
    const shoe = await Shoe.create({model, title, price, brand, articleNumber})
    res.status(201).json({shoe})
}

// module.exports.delete_post ('/delete/:id', async (req, res) => {
//     await Post.deleteOne({_id: req.params.id})
    // return res.redirect('/')
//   });


