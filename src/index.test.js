import test from 'ava';
import sdk from './../dist/src'

test('sdk is a function constructor', t => {
    t.true(typeof(sdk) === 'function')
});
