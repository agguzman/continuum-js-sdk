var create_sdk = require('./../src/index');

var sdk = create_sdk("localhost", "8080", "http", "587544bc1e8d800502f822d7");

sdk.configurePlugin('v1plugin', {
    name: 'sdk another project'
}).then(function(response) {
    console.log(response.data)
}).catch(function(error) {
    console.log(error);
});