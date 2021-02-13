var log = function (message, type) {
    if (type === void 0) { type = 'info'; }
    console.log("LOG (" + type + "): " + message);
};
export default log;
