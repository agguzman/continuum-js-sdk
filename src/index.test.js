import test from 'ava';
import create_sdk from './';

test('sdk is a function constructor', t => {
    t.true(typeof(create_sdk) === 'function')
});

test('create_sdk returns an instance of the sdk', t => {
    const sdk = create_sdk();
    t.true(sdk.hasOwnProperty("create"));
});