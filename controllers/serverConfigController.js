const asyncHandler = require('express-async-handler');
const Settings = require('../models/settingsModel');
const Advanced = require('../models/advancedModel');
const Rules = require('../models/rulesModel');

// @desc    Get server settings
// @route   GET /api/server-config/settings
// @access  Public
const getSettings = asyncHandler(async (req, res) => {
    let settings = await Settings.findOne();
    if (!settings) {
        console.log('No settings found, creating new one');
        settings = await Settings.create({});
    }
    res.status(200).json(settings);
});

// @desc    Update server settings
// @route   PUT /api/server-config/settings
// @access  Public
const updateSettings = asyncHandler(async (req, res) => {
    let settings = await Settings.findOne();
    if (!settings) {
        settings = await Settings.create(req.body);
    } else {
        settings = await Settings.findByIdAndUpdate(
            settings._id,
            req.body,
            { new: true, runValidators: true }
        );
    }
    res.status(200).json(settings);
});

// @desc    Get advanced settings
// @route   GET /api/server-config/advanced
// @access  Public
const getAdvanced = asyncHandler(async (req, res) => {
    let advanced = await Advanced.findOne();
    if (!advanced) {
        advanced = await Advanced.create({});
    }
    res.status(200).json(advanced);
});

// @desc    Update advanced settings
// @route   PUT /api/server-config/advanced
// @access  Public
const updateAdvanced = asyncHandler(async (req, res) => {
    let advanced = await Advanced.findOne();
    if (!advanced) {
        advanced = await Advanced.create(req.body);
    } else {
        advanced = await Advanced.findByIdAndUpdate(
            advanced._id,
            req.body,
            { new: true, runValidators: true }
        );
    }
    res.status(200).json(advanced);
});

// @desc    Get server rules
// @route   GET /api/server-config/rules
// @access  Public
const getRules = asyncHandler(async (req, res) => {
    let rules = await Rules.findOne();
    if (!rules) {
        rules = await Rules.create({});
    }
    res.status(200).json(rules);
});

// @desc    Update server rules
// @route   PUT /api/server-config/rules
// @access  Public
const updateRules = asyncHandler(async (req, res) => {
    let rules = await Rules.findOne();
    if (!rules) {
        rules = await Rules.create(req.body);
    } else {
        rules = await Rules.findByIdAndUpdate(
            rules._id,
            req.body,
            { new: true, runValidators: true }
        );
    }
    res.status(200).json(rules);
});

module.exports = {
    getSettings,
    updateSettings,
    getAdvanced,
    updateAdvanced,
    getRules,
    updateRules
}; 