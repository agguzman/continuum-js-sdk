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

    const defaultBody = (attributes) => ({
        body: { ...attributes }
    });

    let add = (asset, attributes) => {
        checkAvailableAssets('add', asset, availableAssets.add);
        const requiredParams = availableAssets.add[asset];
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

    let associate = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets.associate);
        const requiredParams = availableAssets.associate[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.associate}${asset}`;

        const associate = {
            commits_to_v1_workitem: {
                body: {
                    commit_shas: attributes.commitShas,
                    associated_by: attributes.associatedBy,
                    workitem_number: attributes.workitemNumber,
                    instance_url: attributes.instanceUrl
                }
            }
        };

        const request = associate[asset];
        return postFn(endPoint, request.body, headers);
    };

    let cancel = (asset, attributes) => {
        checkAvailableAssets('cancel', asset, availableAssets.cancel);
        const requiredParams = availableAssets.cancel[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.cancel}${asset}`;

        const cancel = {
            pipelineinstance: defaultBody(attributes)
        };

        const request = cancel[asset];
        return postFn(endPoint, request.body, headers);
    };

    let create = (asset, attributes) => {
        checkAvailableAssets('create', asset, availableAssets.create);
        const requiredParams = availableAssets.create[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.create}${asset}`;

        const create = {
            project: defaultBody(attributes),
            asset: defaultBody(attributes),
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
            credential: defaultBody(attributes),
            tag: defaultBody(attributes),
            user: defaultBody(attributes)
        };

        const request = create[asset];
        return postFn(endPoint, request.body, headers);
    };

    let expo = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets.expo);
        const requiredParams = availableAssets.expo[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.expo}${asset}`;

        const expo = {
            pipeline: defaultBody(attributes),
            project: defaultBody(attributes)
        };

        const request = expo[asset];
        return postFn(endPoint, request.body, headers);
    };

    const get = (asset, attributes) => {
        checkAvailableAssets('get', asset, availableAssets.get);
        const requiredParams = availableAssets.get[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.get}${asset}`;

        const get = {
            token: defaultBody(attributes),
            system_log: defaultBody(attributes),
            settings: defaultBody(attributes),
            worklist: defaultBody(attributes),
            pipeline: defaultBody(attributes),
            pipelineinstance: defaultBody(attributes),
            pi_workitems: defaultBody(attributes),
            pi_data: defaultBody(attributes),
            pi_changes: defaultBody(attributes),
            pi_artifacts: defaultBody(attributes)

        };

        const request = get[asset];
        return postFn(endPoint, request.body, headers);
    };

    let impo = (asset, attributes) => {
        checkAvailableAssets('impo', asset, availableAssets.impo);
        const requiredParams = availableAssets.impo[asset];
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
        checkAvailableAssets('initiate', asset, availableAssets.initiate);
        const requiredParams = availableAssets.initiate[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.initiate}${asset}`;

        const initiate = {
            pipeline: defaultBody(attributes)
        };

        const request = initiate[asset];
        return postFn(endPoint, request.body, headers);
    };

    let invoke = (asset, attributes) => {
        checkAvailableAssets('export', asset, availableAssets.invoke);
        const requiredParams = availableAssets.invoke[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.invoke}${asset}`;

        const invoke = {
            plugin: defaultBody(attributes)
        };

        const request = invoke[asset];
        return postFn(endPoint, request.body, headers);
    };

    let list = (asset, attributes) => {
        checkAvailableAssets('list', asset, availableAssets.list);
        const requiredParams = availableAssets.list[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.list}${asset}`;

        const list = {
            assets: defaultBody(attributes),
            cloud_accounts: defaultBody(attributes),
            cloud_keypairs: defaultBody(attributes),
            cloud: defaultBody(attributes),
            credentials: defaultBody(attributes),
            tasks: defaultBody(attributes)
        };

        const request = list[asset];
        return postFn(endPoint, request.body, headers);
    };

    let promote = (asset, attributes) => {
        checkAvailableAssets('promote', asset, availableAssets.promote);
        const requiredParams = availableAssets.promote[asset];
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

    let remove = (asset, attributes) => {
        checkAvailableAssets('retry', asset, availableAssets.remove);
        const requiredParams = availableAssets.remove[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.remove}${asset}`;

        const remove = {
            object_tag: {
                body: {
                    object_id: attributes.objectId,
                    object_type: attributes.objectType,
                    ...attributes
                }
            }
        };

        const request = remove[asset];
        return postFn(endPoint, request.body, headers);
    };

    let retry = (asset, attributes) => {
        checkAvailableAssets('retry', asset, availableAssets.retry);
        const requiredParams = availableAssets.retry[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.retry}${asset}`;

        const retry = {
            pipelineinstance: defaultBody(attributes)
        };

        const request = retry[asset];
        return postFn(endPoint, request.body, headers);
    };

    let run = (asset, attributes) => {
        checkAvailableAssets('run', asset, availableAssets.run);
        const requiredParams = availableAssets.run[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.run}${asset}`;

        const run = {
            pipelineinstance: defaultBody(attributes)
        };

        const request = run[asset];
        return postFn(endPoint, request.body, headers);
    };

    let update = (asset, attributes) => {
        checkAvailableAssets('update', asset, availableAssets.update);
        const requiredParams = availableAssets.update[asset];
        checkParams(asset, attributes, requiredParams);
        const endPoint = `${urls.update}${asset}`;

        const update = {
            cloud: {
                body: Object.keys(attributes).reduce((acc, cur) => {
                    if (attributes[cur]) { acc[cur] = attributes[cur] }
                    return acc
                }, {})
            },
            user: defaultBody(attributes)
        };

        const request = update[asset];
        return postFn(endPoint, request.body, headers);
    };

    return {
        add,
        associate,
        cancel,
        create,
        expo,
        get,
        impo,
        initiate,
        list,
        invoke,
        promote,
        remove,
        retry,
        run,
        update
    }
}
