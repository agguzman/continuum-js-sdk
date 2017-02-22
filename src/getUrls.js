export default (host, port, protocol) => {
    const apiUrl = `${protocol}://${host}:${port}/api`;
    return {
        add: `${apiUrl}/add_`,
        create: `${apiUrl}/create_`,
        expo: `${apiUrl}/export_`,
        get: `${apiUrl}/get_`,
        impo: `${apiUrl}/import_`,
        initiate: `${apiUrl}/initiate_`,
        invoke: `${apiUrl}/invoke_`,
        list: `${apiUrl}/list_`,
        promote: `${apiUrl}/promote_`,
        retry: `${apiUrl}/retry_`,
        update: `${apiUrl}/update_`
    }
}

