import getUrls from './getUrls';

const host = 'host';
const port = 'port';
const protocol = 'protocol';

test('getUrl constructs an object with create action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual['create']).toBeTruthy();
});

test('getUrl constructs an object with read action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('get')).toBe(true);
});

test('getUrl constructs an object with update action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('update')).toBe(true);
});

test('getUrl constructs an object with expo action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('expo')).toBe(true);
});

test('getUrl constructs an object with impo action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('impo')).toBe(true);
});

test('getUrl constructs an object with initiate action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('initiate')).toBe(true);
});

test('getUrl constructs an object with list action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('list')).toBe(true);
});

test('getUrl constructs an object with add action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('add')).toBe(true);
});

test('getUrl constructs an object with retry action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('retry')).toBe(true);
});

test('getUrl constructs an object with promote action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('promote')).toBe(true);
});

test('getUrl constructs an object with invoke action', () => {
    const actual = getUrls(host, port, protocol);
    expect(actual.hasOwnProperty('invoke')).toBe(true);
});
