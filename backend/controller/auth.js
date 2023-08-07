const axios = require("axios");
const ErrorHandler = require("../utils/ErrorHandler")
const qs = require("qs")

exports.connectZoom = async (req, res, next) => {

    return res.redirect(encodeURI(`https://zoom.us/oauth/authorize?response_type=code&client_id=em03GH6Rd2iV1xI4EqCkw&redirect_uri=${encodeURI('http://localhost:8080/api/v1/auth')}`));

}

exports.getAuth = async (req, res, next) => {
    const data = qs.stringify({
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:8080/api/v1/auth"
    })

    const config = {
        method: "post",
        url: "https://zoom.us/oauth/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')
        },
        data
    }

    try {
        const response = await axios(config);

        console.log(response.data);

        return res.status(200).json({
            success: true,
            message: "fetched",
            data: response.data
        })

    } catch (error) {
        console.log("error", error.message);
        return next(new ErrorHandler("Something went wrong", 401))
    }

}