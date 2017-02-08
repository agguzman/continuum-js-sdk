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
        const assets = ['project', 'change', 'cloud', 'asset'];

        if (!assets.includes(asset)) {
            throw new Error(`Asset ${asset} not available to create.`)
        }

        let endpoint = apiUrl;
        let createEndpoint = `${endpoint}/create_`;

        let requiredParams;
        let missingParams;
        let missing;
        let body;

        switch(asset) {
            case 'project':
                requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);

                body = {
                    ...attributes
                };
                createEndpoint += asset;
                break;

            case 'asset':
                requiredParams = ['name'];
                checkParams(asset, attributes, requiredParams);

                body = {
                    ...attributes
                };
                createEndpoint += asset;
                break;

            case 'cloud':
                requiredParams = ['name', 'provider', 'apiUrl', 'apiProtocol'];
                checkParams(asset, attributes, requiredParams);

                body = {
                    apiurl: attributes.apiUrl,
                    apiprotocol: attributes.apiProtocol,
                    ...attributes
                };
                createEndpoint += asset;
                break;

            default:
                throw new Error(`Sorry, I don't know how to handle asset ${asset}.`)
        }
        return ajax.post(createEndpoint, body);
    };

    return {
        create: create
    }
}