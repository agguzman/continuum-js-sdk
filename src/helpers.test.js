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
    const availableAssets = { asset1: 'a', asset2: 'b', asset3: 'c' };
    const actual = checkAvailableAssets('fn', 'ASSET3', availableAssets);
    expect(actual).toBe(true);
});

test('If asset is not included in the list of available assets, then an error is thrown', () => {
    const availableAssets = { asset1: 'a', asset2: 'b', asset3: 'c' };
    let actual;
    try {
        actual = checkAvailableAssets('fn', 'not-asset', availableAssets);
    } catch(err){}

    expect(actual).toThrow();
});