/**
* Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/

const IncrementGenerator = require('../src/incrementGenerator.js')

/* producer instances */
const increment_1 = new IncrementGenerator(0)
const increment_2 = new IncrementGenerator(1999)
const increment_3 = new IncrementGenerator(-1999)


/* start testing */
test('Increment Generator Test', () => {

    expect(increment_1()).toBe(1)
    expect(increment_1()).toBe(2)
    expect(increment_1()).toBe(3)

    expect(increment_2()).toBe(2000)
    expect(increment_2()).toBe(2001)
    expect(increment_2()).toBe(2002)

    expect(increment_3()).toBe(-1998)
    expect(increment_3()).toBe(-1997)
    expect(increment_3()).toBe(-1996)
})
/* end testing */
