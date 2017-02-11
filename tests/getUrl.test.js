import test from 'ava';
import getUrl from '../src/helpers';

test('getUrl constructs the url in the format protocol://host:port', t => {
    const host = 'host';
    const port = 'port';
    const protocol = 'protocol';
    const actual = getUrl(host, port, protocol);
    const expected = `${protocol}://${host}:${port}`;
    t.is(actual, expected);
});