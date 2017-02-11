import test from 'ava';
import createSdk from './';

test('sdk is a function constructor', t => {
    t.true(typeof(createSdk) === 'function')
});

test('create_sdk returns an instance of the sdk', t => {
    const sdk = createSdk();
    t.true(sdk.hasOwnProperty("create"));
});