const express = require('express');
const router = express.Router();
require('../db/conn')
const User = require('../model/userSchema')
const bcrypt = require('bcryptjs')
 

// using Async/Await
router.post('/reges', async (req, res) => {

    // destructuring from the data enter by user
    const { name, email, number, password, cpassword } = req.body;

    // check the empty field
    if (!name, !email, !number, !password, !cpassword) {
        return req.status(422).json({ error: 'fill the field' })
    }

    // check email is already exist?
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: 'Email Already Exist' })
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: 'Both Password are not matching' })
        }
        else {
            // add data to the database
            const user = new User({ name, email, number, password, cpassword });

            // hashing are perform hear(pass encryption)

            const savedata = await user.save();

            if (savedata) {
                return res.status(200).json({ message: 'user Reg Successfully' })
            }

        }

    }

    catch (err) {
        console.log(err);
    }
});


router.post('/login', async (req, res) => {
    // try catch is used to handle err in async 

    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Enter Field' });
        }

        const userLogin = await User.findOne({ email: email })

        // first check email is exist if exist then enter if block
        if (userLogin) {

            const UserPass = await bcrypt.compare(password, userLogin.password);

            //if pass not exist then enter if block
            if (!UserPass) {
                return res.status(404).json({ error: 'Enter Valid Field' })
            }
            else {
                return res.status(200).json({ message: 'user Login success' })
            }

        }
        else {
            return res.status(404).json({ error: 'Enter Valid Field' })
        }

    } catch (err) {
        console.log(err);
    }

})

module.exports = router;
