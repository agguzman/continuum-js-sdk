module.exports = function(host, port, protocol) {
    return protocol + '://' + host + ':' + port;
};