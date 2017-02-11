import requestHandler from './requestHandler'
import base64 from 'base-64'

export { default as jqueryConnector } from './connectors/jqueryConnector';
export { default as axiosConnector } from './connectors/axiosConnector';

export default (postFn, getFn) => (host, port, protocol) => {
    return {
        withToken: (token) => requestHandler(
            host,
            port,
            protocol,
            token,
            postFn,
            getFn,
            false
        ),
        withCreds: (username, password) => requestHandler(
            host,
            port,
            protocol,
            base64.encode(`${username}:${password}`),
            postFn,
            getFn,
            true
        )
    }
}