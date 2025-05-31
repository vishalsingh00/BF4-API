const asyncHandler = require('express-async-handler');

// @desc    Get server information
// @route   GET /api/server
// @access  Public
const getServerInfo = asyncHandler(async (req, res) => {
    // TODO: Implement actual server info fetching
    const serverInfo = {
        name: "QuriousBit BF4 Server",
        players: {
            current: 32,
            max: 64,
            list: []
        },
        map: {
            current: "Shanghai",
            next: "Paracel Storm"
        },
        settings: {
            gameMode: "Conquest Large",
            tickRate: 60,
            region: "Asia"
        }
    };
    
    res.status(200).json(serverInfo);
});

// @desc    Get player list
// @route   GET /api/server/players
// @access  Public
const getPlayerList = asyncHandler(async (req, res) => {
    // TODO: Implement actual player list fetching
    const players = [];
    res.status(200).json(players);
});

// @desc    Get map rotation
// @route   GET /api/server/maps
// @access  Public
const getMapRotation = asyncHandler(async (req, res) => {
    // TODO: Implement actual map rotation fetching
    const mapRotation = [
        { name: "Shanghai", image: "map1.png" },
        { name: "Paracel Storm", image: "map2.png" },
        { name: "Zavod 311", image: "map3.png" },
        { name: "Operation Locker", image: "map4.png" }
    ];
    
    res.status(200).json(mapRotation);
});

// @desc    Get server rules
// @route   GET /api/server/rules
// @access  Public
const getServerRules = asyncHandler(async (req, res) => {
    // TODO: Implement actual server rules fetching
    const rules = [
        "No cheating or hacking",
        "Be respectful to other players",
        "No spawn camping",
        "Team balance must be maintained"
    ];
    
    res.status(200).json(rules);
});

module.exports = {
    getServerInfo,
    getPlayerList,
    getMapRotation,
    getServerRules
}; 