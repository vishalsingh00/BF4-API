const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const mongoose = require('mongoose');

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Public
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    
    res.status(200).json({
        id: user._id,
        name: user.name
    });
});

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
    try {
        console.log('Starting getUsers function...');
        
        // Check database connection
        console.log('Database connection state:', mongoose.connection.readyState);
        console.log('Connected to database:', mongoose.connection.db.databaseName);
        
        // Log the collection we're trying to access
        const collection = mongoose.connection.db.collection('QuriousBitSettings');
        console.log('Collection name:', collection.collectionName);
        
        // Try to get a count of documents
        const count = await collection.countDocuments();
        console.log('Number of documents in collection:', count);
        
        // Get all documents
        const allDocs = await collection.find({}).toArray();
        console.log('All documents in collection:', JSON.stringify(allDocs, null, 2));
        
        res.status(200).json(allDocs);
    } catch (error) {
        console.error('Error in getUsers:', error);
        res.status(500).json({ 
            message: 'Failed to fetch users',
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// @desc    Create new user
// @route   POST /api/users
// @access  Public
const createUser = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Please provide a name' });
        }

        console.log('Creating new user with name:', name);
        
        const newUser = await User.create({ name });
        console.log('Created user:', newUser);

        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        console.error('Error in createUser:', error);
        res.status(400).json({
            message: 'Failed to create user',
            error: error.message
        });
    }
});

module.exports = {
    getUserById,
    getUsers,
    createUser
}; 