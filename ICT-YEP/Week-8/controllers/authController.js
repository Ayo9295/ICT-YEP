const user = require('../models/usermodel');

exports.signup = async (req, res, next) => {
    let {id, name, age, phone, password} = req.body

    password = await bcrypt.hash(password, 12)

    console.log(password);

    next();
};

exports.getall