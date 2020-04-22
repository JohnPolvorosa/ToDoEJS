
// module.exports.getDate = getDate;
// var getDate =function() {
    
exports.getDate = function() {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    // let day = today.toLocaleDateString("en-US", options);
    return today.toLocaleDateString("en-US", options);
};

// module.exports = exports
exports.getDay = function() {
    let today = new Date();
    let options = {
        weekday: 'long',
    };
    return today.toLocaleDateString("en-US", options);
};

   