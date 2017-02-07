import createSdk from './../dist/index';

const sdk = createSdk("localhost", "8080", "http", "58741bdea64571262822d365");

sdk.create('cloud', {
    name: 'cloud created from sdk1',
    provider: 'Amazon AWS',
    apiUrl: 'localhost',
    apiProtocol: 'https'
}).then(function(response) {
    console.log(response.data)
}).catch(function(error) {
    console.log(error);
});