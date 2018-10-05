// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propEnam => propEnam;
const createNotEnumerableProperty = propNotEnam => Symbol(propNotEnam);

const createProtoMagicObject = () => {
    let magicObject = new Function();
    magicObject.prototype = Object.getPrototypeOf(magicObject);
    return magicObject;
};

const incrementor = () => {};

const asyncIncrementor = async () => {};

const createIncrementer = function * () {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;