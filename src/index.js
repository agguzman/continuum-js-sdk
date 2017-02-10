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

    let checkAvailableAssets = (fn, asset, availableAssets=[]) => {
        if (!availableAssets.includes(asset.toLowerCase())) {
            throw new Error(`Asset ${asset} not available to ${fn}.`)
        }
    };

    let checkParams = (asset, attributes, requiredParams) => {

        let missingParams = requiredParams.reduce((acc, cur) => {
            if (!attributes.hasOwnProperty(cur)) { acc.push(cur) }
            return acc
        }, []);
        if (missingParams.length > 0) {
            let x = ['a', 'e', 'i', 'o', 'u'].includes(asset.charAt(0).toLowerCase()) ? 'an' : 'a';
            throw new Error(`Creating ${x} ${asset} requires ${missingParams}.`)
        }
    };

    let update = (asset, attributes) => {
        const availableToUpdate = ['cloud', 'user'];
        checkAvailableAssets('update', asset, availableToUpdate);
        let updateEndpoint = `${apiUrl}/update_`;

        const update = {
            cloud() {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);

                const body = Object.keys(attributes).reduce((acc, cur) => {
                    if (attributes[cur]) { acc[cur] = attributes[cur] }
                    return acc
                }, {});

                return {
                    body,
                    endpoint: `${updateEndpoint}${asset}`
                }
            },
            'user': () => {
                const requiredParams = ['user'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes },
                    endpoint: createEndpoint += asset
                }
            }
        };

        const u = update[asset]();
        return ajax.post(u.endpoint, u.body);
    };

    let create = (asset, attributes) => {
        const availableToCreate = ['project', 'cloud', 'asset', 'account', 'credential', 'tag', 'user'];
        checkAvailableAssets('create', asset, availableToCreate);

        let createEndpoint = `${apiUrl}/create_`;

        const create = {
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

        const c = create[asset]();
        return ajax.post(c.endpoint, c.body);
    };

    return {
        create,
        update,
    }
}