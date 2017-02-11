
export const checkAvailableAssets = (fn, asset, availableAssets=[]) => {
    if (!availableAssets.includes(asset.toLowerCase())) {
        throw new Error(`Asset ${asset} not available to ${fn}.`)
    }
};

export const checkParams = (asset, attributes, requiredParams) => {

    let missingParams = requiredParams.reduce((acc, cur) => {
        if (!attributes.hasOwnProperty(cur)) { acc.push(cur) }
        return acc
    }, []);
    if (missingParams.length > 0) {
        let x = [...'aeiou'].includes(asset.charAt(0).toLowerCase()) ? 'an' : 'a';
        throw new Error(`Creating ${x} ${asset} requires ${missingParams}.`)
    }
};