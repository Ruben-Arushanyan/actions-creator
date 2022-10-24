/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

import ProduceByPath from 'produce-by-path'
import {isFunction} from './utils'

const actionsCreator = new ProduceByPath({
    call: (path, args) => {
        const cb = isFunction(args[args.length - 1]) ? args.pop() : null
        const action = {
            type: path.join('/'),
            payload: args[0],
        }
        if (cb) {
            action.cb = cb
        }
        return action
    },
    toPrimitive: (path) => path.join('/')
})

export {actionsCreator}