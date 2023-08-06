const { destroyOTPJob } = require("../cron");
const OTP = require("../models/Otp");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
const otpGenerator = require("otp-generator");
const otpVerificationMail = require("../utils/otpVerificationMail");

exports.sendOtp = async (req, res, next) => {
    try {
        
    const {email} = req.body;

        if(!email) return next(new ErrorHandler("Email is required to send otp", 401));

        // check if the user already exists or not 

        let user = await User.findOne({email});

        if(user) return next(new ErrorHandler("User already exists" , 401));

        const otpOptions = {
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        }

        let otp = await otpGenerator.generate(6, otpOptions);

        await OTP.create({email , otp});

        await otpVerificationMail(email, otp)

        // otp will be deleted after 5 minutes automatically
        await destroyOTPJob(next, otp._id);

        return res.status(200).json({
            success : true,
            message : `Verification mail sent to ${email}`
        })
        

    } catch (error) {
        console.log("Error in send otp handler" , error.message);
        return next(new ErrorHandler("Something went wrong while sending otp" , 401));
    }
}