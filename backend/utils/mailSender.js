const nodemailer = require("nodemailer");

const mailSender = async (emailId , subject , body = null) => {

    try {
        
        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth : {
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASS
            }
        });

        let mailContent = await transporter.sendMail({
            from : "OneHacks III project (change this field name later)",
            to : emailId,
            subject,
            html : body
        });

        return mailContent;

    } catch (error) {
        console.log("Error while sending mail");
        console.log(error.message);
    }

}

module.exports = mailSender;