export default (host, port, protocol) => {
    const apiUrl = `${protocol}://${host}:${port}/api`;
    return {
        create: `${apiUrl}/create_`,
        get: `${apiUrl}/get_`,
        update: `${apiUrl}/update_`,
        expo: `${apiUrl}/export_`,
        initiate: `${apiUrl}/initiate_`,
        invoke: `${apiUrl}/invoke_`,
        promote: `${apiUrl}/promote_`,
        retry: `${apiUrl}/retry_`,
        add: `${apiUrl}/add_`,
        list: `${apiUrl}/list_`
    }
}

