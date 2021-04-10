/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

const ProduceByPath = require('produce-by-path')
const IncrementGenerator = require('./incrementGenerator.js')
const {
    identity,
    isFunction,
} = require('./utils')


const incrementer = new IncrementGenerator(0)

const actionsCreator = new ProduceByPath({
    call: (path, args) => ({
        type: path.join('/'),
        args,
        cb: isFunction(args[args.length - 1]) ? args.pop() : identity,
        _index: incrementer()
    }),
    toPrimitive: (path) => path.join('/')
})

module.exports = actionsCreator
