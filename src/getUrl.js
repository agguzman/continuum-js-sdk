export default (host, port, protocol) => {
    return `${protocol}://${host}:${port}`
}