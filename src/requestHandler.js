import getUrls from './getUrls'
import availableAssetsOnMethods from './availableAssets'
import { checkParams, checkAvailableAssets } from './helpers'


export default (host, port, protocol, token, postFn, getFn, isBasic) => {

    const urls = getUrls(host, port, protocol);

    let createHeaderObj = (token, isBasic) => {
        return {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `${isBasic ? 'Basic' : 'Token'} ${token}`
        }
    };

    const headers = createHeaderObj(token, isBasic);

    let expo = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssetsOnMethods['expo']);
        const expo = {
            pipeline() {
                const requiredParams = ['pipeline'];
                checkParams(asset, attributes, requiredParams);
                return { body: { ...attributes }, endPoint: `${urls.expo}${asset}` }
            },
            project() {
                const requiredParams = ['project'];
                checkParams(asset, attributes, requiredParams);
                return { body: { ...attributes }, endPoint: `${urls.expo}${asset}` }
            },
        };

        const request = expo[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    const read = (asset, attributes) => {
        checkAvailableAssets('read', asset, availableAssetsOnMethods['read']);

        const read = {
            __getPiRelated() {
                const requiredParams = ['pi'];
                checkParams(asset, attributes, requiredParams);
                return { body: { ...attributes }, endPoint: `${urls.read}${asset}` }
            },
            token() {
                return { body: {}, endPoint: `${urls.read}${asset}` }
            },
            system_log() {
                return {
                    body: { ...attributes }, endPoint: `${urls.read}${asset}`,

                }
            },
            settings() {
                return { body: { ...attributes }, endPoint: `${urls.read}${asset}` }
            },
            worklist() {
                return { body: { ...attributes }, endPoint: `${urls.read}${asset}` }
            },
            pipeline() {
                const requiredParams = ['pipeline'];
                checkParams(asset, attributes, requiredParams);
                return { body: { ...attributes }, endPoint: `${urls.read}${asset}` }
            },
            pipelineinstance() {
                return this.__getPiRelated()
            },
            pi_workitems() {
                return this.__getPiRelated()
            },
            pi_data() {
                return this.__getPiRelated()
            },
            pi_changes() {
                return this.__getPiRelated()
            },
            pi_artifacts() {
                return this.__getPiRelated()
            },

        };

        const request = read[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let update = (asset, attributes) => {
        checkAvailableAssets('update', asset, availableAssetsOnMethods['update']);

        const update = {
            cloud() {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);

                const body = Object.keys(attributes).reduce((acc, cur) => {
                    if (attributes[cur]) { acc[cur] = attributes[cur] }
                    return acc
                }, {});

                return {
                    body, endPoint: `${urls.update}${asset}`
                }
            },
            user() {
                const requiredParams = ['user'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes }, endPoint: `${urls.update}${asset}`
                }
            }
        };

        const request = update[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let create = (asset, attributes) => {
        console.log('asset from create function', asset)
        checkAvailableAssets('create', asset, availableAssetsOnMethods['create']);

        const create = {
            project() {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes } , endPoint: `${urls.create}${asset}`
                }
            },
            asset() {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            },
            cloud() {
                const requiredParams = ['name', 'provider', 'apiUrl', 'apiProtocol'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: {
                        apiurl: attributes.apiUrl,
                        apiprotocol: attributes.apiProtocol,
                        ...attributes
                    }, endPoint: `${urls.create}${asset}`
                }
            },
            account() {
                const requiredParams = ['name', 'provider', 'login', 'password', 'defaultCloud'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: {
                        default_cloud: attributes.defaultCloud,
                        ...attributes
                    }, endPoint: `${urls.create}${asset}`
                }
            },
            credential() {
                const requiredParams = ['name', 'username', 'password'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            },
            tag() {
                const requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            },
            user() {
                const requiredParams = ['user', 'name', 'role'];
                checkParams(asset, attributes, requiredParams);
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            }
        };

        const request = create[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    return {
        create,
        update,
        read,
        expo
    }
}