const mailSender = require("./mailSender");

const otpVerificationMail = async(email,otp) => {
    try {

        await mailSender(email , "Email Id verification code" , otp);
        console.log("verification mail sent successfully");

    } catch (error) {
        console.log("Error while sending verification mail");
    }
}

module.exports = otpVerificationMail;