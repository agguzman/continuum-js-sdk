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
        if (!availableAssets.includes(asset)) {
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

    let create = (asset, attributes) => {
        const assets = ['project', 'change', 'cloud', 'asset', 'account', 'credential', 'tag', 'user'];
        checkAvailableAssets(asset, availableAssets=assets);

        let createEndpoint = `${apiUrl}/create_`;
        let requiredParams;

        const creation = {
            'project': () => {
                requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'asset': () => {
                requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'cloud': () => {
                requiredParams = ['name', 'provider', 'apiUrl', 'apiProtocol'];
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
                requiredParams = ['name', 'provider', 'login', 'password', 'defaultCloud'];
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
                requiredParams = ['name', 'username', 'password'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'tag': () => {
                requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            },
            'user': () => {
                requiredParams = ['user', 'name', 'role'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            }

        };

        const c = creation[asset]();
        return ajax.post(c.endpoint, c.body);
    };

    return {
        create: create
    }
}