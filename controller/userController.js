const User = require('../models/User');


exports.registerUser = async (req, res) => {
    try {
        const { name, socialMediaHandle  } = req.body;
       
        const images = req.files.map(file => file.path); 
        

        const newUser = new User({
            name,
            socialMediaHandle,
            images,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        
        const allUsers = await User.find();
        
     
        if (!allUsers.length) {
            return res.status(404).json({ message: 'No users found' });
        }

        
        res.status(200).json({
            message: 'All users fetched successfully',
            data: allUsers,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred', error: err });
    }
};