import getUrl from './getUrl';
import axios from 'axios';

export default (host, port, protocol, token) => {
    const baseUrl = getUrl(host, port, protocol);
    const apiUrl = `${baseUrl}/api`;
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${token}`
    };

    let ajax = axios.create({
        baseURL: baseUrl,
        timeout: 1000,
        headers: headers
    });

    let checkAvailableAssets = (asset, availableAssets=[]) => {
        if (!availableAssets.includes(asset.toLowerCase())) {
            throw new Error(`Asset ${asset} not available to create.`)
        }
    };

    let checkParams = (asset, attributes, requiredParams) => {
        let missingParams = [];
        requiredParams.map((param) => {
            if (!attributes.hasOwnProperty(param)) {
                missingParams.push(param);
            }
        });
        if (missingParams.length > 0) {
            let x = ['a', 'e', 'i', 'o', 'u'].includes(asset.charAt(0).toLowerCase()) ? 'an' : 'a';
            throw new Error(`Creating ${x} ${asset} requires ${missingParams}.`)
        }
    };

    let update = (asset, attributes) => {
        const asset = [''];
        checkAvailableAssets(asset, availableAssets=assets);
        let updateEndpoint = `${apiUrl}/update_`;

        const updator = {

        };

        const u = updator[asset]();
        return ajax.post(u.endpoint, u.body);
    };

    let create = (asset, attributes) => {
        const assets = ['project', 'cloud', 'asset', 'account', 'credential', 'tag', 'user'];
        checkAvailableAssets(asset, availableAssets=assets);

        let createEndpoint = `${apiUrl}/create_`;

        const creator = {
            'project': () => {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'asset': () => {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'cloud': () => {
                const requiredParams = ['name', 'provider', 'apiUrl', 'apiProtocol'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: {
                        apiurl: attributes.apiUrl,
                        apiprotocol: attributes.apiProtocol,
                        ...attributes
                    },
                    endpoint: createEndpoint += asset
                }
            },
            'account': () => {
                const requiredParams = ['name', 'provider', 'login', 'password', 'defaultCloud'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: {
                        default_cloud: attributes.defaultCloud,
                        ...attributes
                    },
                    endpoint: createEndpoint += asset
                }
            },
            'credential': () => {
                const requiredParams = ['name', 'username', 'password'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'tag': () => {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'user': () => {
                const requiredParams = ['user', 'name', 'role'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            }
        };

        const c = creator[asset]();
        return ajax.post(c.endpoint, c.body);
    };

    return {
        create: create
    }
}