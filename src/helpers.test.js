import { checkParams, checkAvailableAssets } from './helpers'

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

test('Asset should be included in the list of available assets', () => {
    const availableAssets = ['a', 'b', 'c', 'd'];
    const actual = checkAvailableAssets('fn', 'A', availableAssets);
    expect(actual).toBe(true);
});

test('If asset is not included in the list of available assets, then an error is thrown', () => {
    const availableAssets = ['a', 'b', 'c', 'd'];
    let actual;
    try {
        actual = checkAvailableAssets('fn', 'E', availableAssets);
    } catch(err){}

    expect(actual).toThrow();
});