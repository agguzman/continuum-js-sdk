import test from 'ava';
import get_url from './get_url';

test('get_url constructs the url in the format protocol://host:port', t => {
    const host = 'host';
    const port = 'port';
    const protocol = 'protocol';
    const actual = get_url(host, port, protocol);
    const expected = `${protocol}://${host}:${port}`;
    t.is(actual, expected);
});