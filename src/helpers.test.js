import { checkParams } from './helpers'

test('All attributes specified should be included in the required parameters list', () => {
    const requiredParams = ['a', 'b', 'c'];
    const body = { a: 'a', b: 'b', c: 'c' };
    const actual = checkParams('letter', body, requiredParams);
    expect(actual).toBe(true);
});

test('Attributes specified are missing in the required parameters list', () => {
    const requiredParams = ['a', 'b', 'c'];
    const body = { b: 'b', c: 'c' };
    const asset = 'letter';
    let actual;
    try {
        actual = checkParams(asset, body, requiredParams);
    } catch(err){}

    expect(actual).toThrow();
});