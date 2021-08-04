const express = require('express');
const router = express.Router ();
const user = require('../models/userModel')

router.get('/', (req, res) => {
    res.send('jjj')
})

router.post('/signup', async (req, res, )=>{
    
        let { firstName, lastName, email, password } = req.body;

        const checkEmail = await user.findOne ({ email});
        if (checkEmail) {
            return res.json ({ 
                status: 'failed',
                message: "email already exists",

            })
        }
    const newUser= { firstName, lastName , email, password};

    const createdUser = await user.create (newUser);

    res.status(201).json({
        satus: "success",
        data: {
            id: createdUser._id,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            email: createdUser.email,

        },
    });

    res.send('signup')
    console.log(req.body) 
})


module.exports = router;