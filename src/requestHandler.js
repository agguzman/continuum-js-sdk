import getUrls from './getUrls'
import availableAssets from './availableAssets'
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

    let impo = (asset, attributes) => {
        checkAvailableAssets('impo', asset, availableAssets['impo']);
        const requiredParams = availableAssets['impo'][asset];
        checkParams(asset, attributes, requiredParams);

        const impo = {
            pipeline() {
                return {
                    body: { private_key: attributes.privateKey, ...attributes },
                    endPoint: `${urls.impo}${asset}` }
            }
        };

        const request = impo[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let list = (asset, attributes) => {
        checkAvailableAssets('list', asset, availableAssets['list']);
        const requiredParams = availableAssets['list'][asset];
        checkParams(asset, attributes, requiredParams);
        const list = {
            assets() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.list}${asset}` }
            },
            cloud_accounts() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.list}${asset}` }
            },
            cloud_keypairs() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.list}${asset}` }
            },
            cloud() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.list}${asset}` }
            },
            credentials() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.list}${asset}` }
            },
            tasks() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.list}${asset}` }
            }
        };

        const request = list[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let add = (asset, attributes) => {
        checkAvailableAssets('add', asset, availableAssets['add']);
        const requiredParams = availableAssets['add'][asset];
        checkParams(asset, attributes, requiredParams);

        const add = {
            cloud_keypair() {
                return {
                    body: { private_key: attributes.privateKey, ...attributes },
                    endPoint: `${urls.add}${asset}` }
            },
            object_tag() {
                return {
                    body: { private_key: attributes.privateKey, ...attributes },
                    endPoint: `${urls.add}${asset}` }
            }
        };

        const request = add[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let retry = (asset, attributes) => {
        checkAvailableAssets('retry', asset, availableAssets['retry']);
        const requiredParams = availableAssets['retry'][asset];
        checkParams(asset, attributes, requiredParams);

        const retry = {
            pipelineinstance() {
                return {
                    body: { ...attributes },
                    endPoint: `${urls.retry}${asset}` }
            }
        };

        const request = retry[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let promote = (asset, attributes) => {
        checkAvailableAssets('promote', asset, availableAssets['promote']);
        const requiredParams = availableAssets['promote'][asset];
        checkParams(asset, attributes, requiredParams);

        const promote = {
            revision() {
                return {
                    body: {
                        full_version: attributes.fullVersion,
                        ...attributes
                    },
                    endPoint: `${urls.promote}${asset}` }
            }
        };

        const request = promote[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let initiate = (asset, attributes) => {
        checkAvailableAssets('initiate', asset, availableAssets['initiate']);
        const requiredParams = availableAssets['initiate'][asset];
        checkParams(asset, attributes, requiredParams);

        const initiate = {
            pipeline() {
                return { body: { ...attributes }, endPoint: `${urls.initiate}${asset}` }
            }
        };

        const request = initiate[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let invoke = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets['invoke']);
        const requiredParams = availableAssets['invoke'][asset];
        checkParams(asset, attributes, requiredParams);

        const invoke = {
            plugin() {
                return { body: { ...attributes }, endPoint: `${urls.invoke}${asset}` }
            }
        };

        const request = invoke[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let expo = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets['expo']);
        const requiredParams = availableAssets['expo'][asset];
        checkParams(asset, attributes, requiredParams);

        const expo = {
            pipeline() {
                return { body: { ...attributes }, endPoint: `${urls.expo}${asset}` }
            },
            project() {
                return { body: { ...attributes }, endPoint: `${urls.expo}${asset}` }
            },
        };

        const request = expo[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    const get = (asset, attributes) => {
        checkAvailableAssets('get', asset, availableAssets['get']);
        const requiredParams = availableAssets['get'][asset];
        checkParams(asset, attributes, requiredParams);

        const get = {
            __getPiRelated() {
                return { body: { ...attributes }, endPoint: `${urls.get}${asset}` }
            },
            token() {
                return { body: {}, endPoint: `${urls.get}${asset}` }
            },
            system_log() {
                return this.__getPiRelated()
            },
            settings() {
                return this.__getPiRelated()
            },
            worklist() {
                return this.__getPiRelated()
            },
            pipeline() {
                return this.__getPiRelated()
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

        const request = get[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let update = (asset, attributes) => {
        checkAvailableAssets('update', asset, availableAssets['update']);
        const requiredParams = availableAssets['update'][asset];
        checkParams(asset, attributes, requiredParams);

        const update = {
            cloud() {
                const body = Object.keys(attributes).reduce((acc, cur) => {
                    if (attributes[cur]) { acc[cur] = attributes[cur] }
                    return acc
                }, {});

                return {
                    body, endPoint: `${urls.update}${asset}`
                }
            },
            user() {
                return {
                    body: { ...attributes }, endPoint: `${urls.update}${asset}`
                }
            }
        };

        const request = update[asset]();
        return postFn(request.endPoint, request.body, headers);
    };

    let create = (asset, attributes) => {
        checkAvailableAssets('create', asset, availableAssets['create']);
        const requiredParams = availableAssets['create'][asset];
        checkParams(asset, attributes, requiredParams);

        const create = {
            project() {
                return {
                    body: { ...attributes } , endPoint: `${urls.create}${asset}`
                }
            },
            asset() {
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            },
            cloud() {
                return {
                    body: {
                        apiurl: attributes.apiUrl,
                        apiprotocol: attributes.apiProtocol,
                        ...attributes
                    }, endPoint: `${urls.create}${asset}`
                }
            },
            account() {
                return {
                    body: {
                        default_cloud: attributes.defaultCloud,
                        ...attributes
                    }, endPoint: `${urls.create}${asset}`
                }
            },
            credential() {
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            },
            tag() {
                return {
                    body: { ...attributes }, endPoint: `${urls.create}${asset}`
                }
            },
            user() {
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
        get,
        expo,
        add,
        initiate,
        invoke,
        promote,
        retry,
        impo
    }
}
