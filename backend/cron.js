const OTP = require("./models/Otp");
const ErrorHandler = require("./utils/ErrorHandler");
const cron = require("node-cron");


exports.destroyOTPJob = async (next, Otp) => {

    let expression = "*/5 * * * *";

    let job = cron.schedule(expression , async () => {
        try {

            console.log("cron job started to delete the otp after 5 minutes");
            const otp = await OTP.findOne({_id : Otp});

            if(!otp) return next(new ErrorHandler("OTP not found", 404));

            await OTP.findByIdAndDelete(Otp);

            console.log("otp deleted successfully");
            job.stop();

        } catch (error) {
            console.log("Error in destroyOTPJob" , error);
        }
    })

}