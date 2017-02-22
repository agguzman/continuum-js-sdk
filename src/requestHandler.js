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

    let add = (asset, attributes) => {
        checkAvailableAssets('add', asset, availableAssets['add']);
        const requiredParams = availableAssets['add'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.add}${asset}`;

        const add = {
            cloud_keypair: {
                body: {
                    private_key: attributes.privateKey,
                    ...attributes
                }
            },
            object_tag: {
                body: {
                    object_id: attributes.objectId,
                    object_type: attributes.objectType,
                    ...attributes
                }
            }
        };

        const request = add[asset];
        return postFn(endPoint, request.body, headers);
    };

    let create = (asset, attributes) => {
        checkAvailableAssets('create', asset, availableAssets['create']);
        const requiredParams = availableAssets['create'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.retry}${asset}`;

        const create = {
            project: {
                body: { ...attributes }
            },
            asset: {
                body: { ...attributes }
            },
            cloud: {
                body: {
                    apiurl: attributes.apiUrl,
                    apiprotocol: attributes.apiProtocol,
                    ...attributes
                }
            },
            account: {
                body: {
                    default_cloud: attributes.defaultCloud,
                    ...attributes
                }
            },
            credential: {
                body: { ...attributes }
            },
            tag: {
                body: { ...attributes }
            },
            user: {
                body: { ...attributes }
            }
        };

        const request = create[asset];
        return postFn(endPoint, request.body, headers);
    };

    let expo = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets['expo']);
        const requiredParams = availableAssets['expo'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.expo}${asset}`;

        const expo = {
            pipeline: {
                body: { ...attributes }
            },
            project: {
                body: { ...attributes }
            }
        };

        const request = expo[asset];
        return postFn(endPoint, request.body, headers);
    };

    const get = (asset, attributes) => {
        checkAvailableAssets('get', asset, availableAssets['get']);
        const requiredParams = availableAssets['get'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.get}${asset}`;

        const get = {
            token: {
                body: {}
            },
            system_log: {
                body: { ...attributes }
            },
            settings: {
                body: { ...attributes }
            },
            worklist: {
                body: { ...attributes }
            },
            pipeline: {
                body: { ...attributes }
            },
            pipelineinstance: {
                body: { ...attributes }
            },
            pi_workitems: {
                body: { ...attributes }
            },
            pi_data: {
                body: { ...attributes }
            },
            pi_changes: {
                body: { ...attributes }
            },
            pi_artifacts: {
                body: { ...attributes }
            }

        };

        const request = get[asset];
        return postFn(endPoint, request.body, headers);
    };

    let impo = (asset, attributes) => {
        checkAvailableAssets('impo', asset, availableAssets['impo']);
        const requiredParams = availableAssets['impo'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.impo}${asset}`;

        const impo = {
            pipeline: {
                body: {
                    private_key: attributes.privateKey,
                    ...attributes
                }
            }
        };

        const request = impo[asset];
        return postFn(endPoint, request.body, headers);
    };

    let initiate = (asset, attributes) => {
        checkAvailableAssets('initiate', asset, availableAssets['initiate']);
        const requiredParams = availableAssets['initiate'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.initiate}${asset}`;

        const initiate = {
            pipeline: {
                body: {...attributes }
            }
        };

        const request = initiate[asset];
        return postFn(endPoint, request.body, headers);
    };

    let invoke = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets['invoke']);
        const requiredParams = availableAssets['invoke'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.invoke}${asset}`;

        const invoke = {
            plugin: {
                body: { ...attributes }
            }
        };

        const request = invoke[asset];
        return postFn(endPoint, request.body, headers);
    };

    let list = (asset, attributes) => {
        checkAvailableAssets('list', asset, availableAssets['list']);
        const requiredParams = availableAssets['list'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.list}${asset}`;

        const list = {
            assets: {
                body: { ...attributes }
            },
            cloud_accounts: {
                    body: { ...attributes }
            },
            cloud_keypairs: {
                    body: { ...attributes }
            },
            cloud: {
                    body: { ...attributes }
            },
            credentials: {
                    body: { ...attributes }
            },
            tasks: {
                    body: { ...attributes }
            }
        };

        const request = list[asset];
        return postFn(endPoint, request.body, headers);
    };

    let promote = (asset, attributes) => {
        checkAvailableAssets('promote', asset, availableAssets['promote']);
        const requiredParams = availableAssets['promote'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.promote}${asset}`;

        const promote = {
            revision: {
                body: {
                    full_version: attributes.fullVersion,
                    ...attributes
                }
            }
        };

        const request = promote[asset]();
        return postFn(endPoint, request.body, headers);
    };

    let retry = (asset, attributes) => {
        checkAvailableAssets('retry', asset, availableAssets['retry']);
        const requiredParams = availableAssets['retry'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.retry}${asset}`;

        const retry = {
            pipelineinstance: {
                body: { ...attributes }
            }
        };

        const request = retry[asset];
        return postFn(endPoint, request.body, headers);
    };

    let update = (asset, attributes) => {
        checkAvailableAssets('update', asset, availableAssets['update']);
        const requiredParams = availableAssets['update'][asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.retry}${asset}`;

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
        return postFn(endPoint, request.body, headers);
    };

    return {
        add,
        create,
        expo,
        get,
        impo,
        initiate,
        list,
        invoke,
        promote,
        retry,
        update
    }
}
