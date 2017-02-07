var create_sdk = require('./../src/index');

var sdk = create_sdk("localhost", "8080", "http", "587544bc1e8d800502f822d7");

console.log(sdk);

sdk.create('project', {
    name: 'sdk another project1'
}).then(function(response) {
    console.log(response.data)
}).catch(function(error) {
    console.log(error);
});