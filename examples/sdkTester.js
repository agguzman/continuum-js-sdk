import createSdk from './../build/bundle';

const sdk = createSdk("localhost", "8080", "http", "58741bdea64571262822d365");


export const pipelineInstance = () => {
    sdk.read('pipelineinstance', {pi: '587be494a64571540b37810a'})
        .then(function(response) {

            console.log('type of phases', typeof(response.data.Response.phases))

            console.dir(response.data, { depth: null})
        }).catch(function(error) {
        console.log(error);
    });
};

export const piChanges = () => {
    sdk.read('pi_changes', {pi: 'ebd636df'})
        .then(function(response) {
            console.log(response.data)
        }).catch(function(error) {
        console.log(error);
    });
};

export const exportPipeline = () => {
    sdk.expo('pipeline', {pipeline: 'Build'})
        .then(function(response) {
            console.dir(response.data, {depth: null})
        }).catch(function(error) {
        console.log(error);
    });
};

export const worklist = () => {
    sdk.read('worklist', {})
        .then(function(response) {
            console.log(response.data)
        }).catch(function(error) {
        console.log(error);
    });
};

export const settings = () => {
    sdk.read('settings', {})
        .then(function(response) {
            console.log(response.data)
        }).catch(function(error) {
        console.log(error);
    });
};

export const systemLog = () => {
    sdk.read('system_log', {})
        .then(function(response) {
            console.log(response.data)
        }).catch(function(error) {
        console.log(error);
    });
};

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
    sdk.create('asset', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createAccount = (name) => {
    sdk.create('account', {
        name: `account ${name} from sdk`,
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
    sdk.create('tag', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createUser = () => {
    sdk.create('user', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};

export const createCredential = () => {
    sdk.create('credential', {
        name: 'project 1aaa from sdk'
    }).then(function(response) {
        console.log(response.data)
    }).catch(function(error) {
        console.log(error);
    });
};