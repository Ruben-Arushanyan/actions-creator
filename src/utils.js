/**
* Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/

const identity = (x) => x
const isFunction = (x) => typeof x === 'function'

module.exports = {
    isFunction,
    identity,
}

