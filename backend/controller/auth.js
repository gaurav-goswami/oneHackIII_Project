const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
const OTP = require("../models/Otp");

exports.signUp = async (req, res, next) => {
    try {

        const { username, email, password, otp } = req.body;

        if (!username || !email || !password || !otp) return next(new ErrorHandler("All fields are required", 401));

        let user = await User.findOne({ email });

        if (user) return next(new ErrorHandler("User already exists. Please login", 401));

        let recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        if (recentOtp.length === 0) {
            return next(new ErrorHandler("Otp not found", 404))
        } else if (otp !== recentOtp[0].otp) {
            return next(new ErrorHandler("Otp did not match or otp expired", 401))
        }

        let hashedPassword;

        try {

            const genSalt = await bcrypt.genSalt(Number(process.env.GEN_SALT));
            hashedPassword = await bcrypt.hash(password, genSalt);

        } catch (error) {
            console.log("Error while hashing password");
            return next(new ErrorHandler("User already exists. Please login", 401));
        }

        user = await User.create({ username, email, password: hashedPassword });

        const payload = {
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, "10d");

        const cookieOptions = {
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            success: true,
            message: "Signup successfull",
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }
        })

    } catch (error) {
        console.log("Error in signup handler", error.message);
        return next(new ErrorHandler("Something went wrong while signup. Please try again later", 401));
    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) return next(new ErrorHandler("Email and password are required", 401));

        let user = await User.findOne({ email }).select("+password");

        if (!user) return next(new ErrorHandler("Invalid Credentials", 404));

        if (user && await bcrypt.compare(password, user.password)) {

            const payload = {
                id: user._id,
                email: user.email
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, "10d");

            const cookieOptions = {
                expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            res.cookie("token", token, cookieOptions);

            return res.status(200).json({
                success: true,
                message: "Logged In",
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
            })

        } else {
            return next(new ErrorHandler("Invalid credentials", 401));
        }

    } catch (error) {
        console.log("error in login handler", error);
        return next(new ErrorHandler("Something went wrong. Please try again later"));
    }
}

exports.logout = (req, res, next) => {
    try {

        res.clearCookie("token");

        return res.status(200).json({
            success: true,
            message: "Logged out"
        })

    } catch (error) {
        console.log("Error in logout", error);
        return next(new ErrorHandler());
    }
}