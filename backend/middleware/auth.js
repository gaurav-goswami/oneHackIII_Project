const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");

exports.isAuthenticated = (req, res, next) => {
    try {

        const { token } = req.cookies;

        if (!token || token === null) return next(new ErrorHandler("User is not authenticated", 401));

        try {

            const decoded_payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded_payload;

        } catch (error) {
            console.log("Error in auth middleware", error.message);
            return next(new ErrorHandler("Token is invalid", 401));
        }

        next();

    } catch (error) {
        console.log("token validation failed", error.message);
        return next(new ErrorHandler("Token validation failed", 401));
    }
}