/**
 * Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

function IncrementGenerator(initialValue) {
    let current = initialValue
    return () => ++current
}


module.exports = IncrementGenerator
