const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
exports.registerUser = async (req, res) => {
    try {
        // Validate req.body exists
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Now safe to destructure
        const { fullName, email, password, profileImageUrl } = req.body;

        // Further validation
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Create the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl,
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error registering user",
            error: err.message
        });
    }
};


// Login User
exports.loginUser = async (req, res) => {
    try {
        // Validate req.body exists
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Now safe to destructure
        const { email, password } = req.body;

        // Further validation
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if email already exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check if password is correct
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error logging in user",
            error: err.message
        });
    }
};

// Get user info
exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error getting user info",
            error: err.message
        });
    }
};