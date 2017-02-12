export default (host, port, protocol) => {
    const apiUrl = `${protocol}://${host}:${port}/api`;
    return {
        create: `${apiUrl}/create_`,
        read: `${apiUrl}/get_`,
        update: `${apiUrl}/update_`,
        expo: `${apiUrl}/export_`,
        initiate: `${apiUrl}/initiate_`,
        invoke: `${apiUrl}/invoke_`,
        promote: `${apiUrl}/promote_`,
        retry: `${apiUrl}/retry_`,
        add: `${apiUrl}/add_`
    }
}

