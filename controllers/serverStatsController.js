const asyncHandler = require('express-async-handler');

// @desc    Get real-time server stats
// @route   GET /api/server-stats
// @access  Public
const getServerStats = asyncHandler(async (req, res) => {
    try {
        // In a real implementation, this data would come from the BF4 server
        // For now, we're simulating real-time data with hardcoded values
        const serverStats = {
            players: {
                current: 60,
                max: 64
            },
            ping: 104,
            tickrate: 60,
            timestamp: new Date().toISOString()
        };

        console.log('Fetching server stats:', serverStats);
        res.status(200).json(serverStats);
    } catch (error) {
        console.error('Error in getServerStats:', error);
        res.status(500).json({ 
            message: 'Error fetching server stats',
            error: error.message 
        });
    }
});

module.exports = {
    getServerStats
};