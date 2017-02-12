import test from 'ava';
import getUrls from './../dist/src/getUrls';

const host = 'host';
const port = 'port';
const protocol = 'protocol';

test('getUrl constructs an object with create action', t => {
    const actual = getUrls(host, port, protocol);
    t.true(actual.hasOwnProperty('create'));
});
test('getUrl constructs an object with read action', t => {
    const actual = getUrls(host, port, protocol);
    t.true(actual.hasOwnProperty('read'));
});
test('getUrl constructs an object with update action', t => {
    const actual = getUrls(host, port, protocol);
    t.true(actual.hasOwnProperty('update'));
});
test('getUrl constructs an object with expo action', t => {
    const actual = getUrls(host, port, protocol);
    t.true(actual.hasOwnProperty('expo'));
});
