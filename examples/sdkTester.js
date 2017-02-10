import createSdk from './../dist/index';

const sdk = createSdk("localhost", "8080", "http", "58741bdea64571262822d365");

export const getToken = () => {
    sdk.read('token')
    .then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createProject = (name) => {
    sdk.create('project', {
        //name: `project ${name} from sdk`
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createCloud = () => {
    sdk.create('cloud', {
        name: 'cloud rainy from sdk',
        provider: 'Amazon AWS',
        apiUrl: 'localhost',
        apiProtocol: 'https'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createAsset = () => {
    sdk.create('project', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createAccount = () => {
    sdk.create('project', {
        name: 'account bank from sdk',
        login: 'myLogin',
        password: 'myPassWord',
        provider: 'Azure',
        defaultCloud: 'some nonexistant account'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createTag = () => {
    sdk.create('project', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createUser = () => {
    sdk.create('project', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createCredential = () => {
    sdk.create('project', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};