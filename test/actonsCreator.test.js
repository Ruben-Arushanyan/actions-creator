/**
* Copyright (c) 2020-present Ruben Arushanyan (https://github.com/ruben-arushanyan)
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* 
*/

const actionsCreator = require('../src')
const {
    identity,
} = require('../src/utils.js')

/* start testing */
test('Actions Creator Basic Test', () => {
    expect(actionsCreator.MY.FIRST.ACTION("arg1", "arg2"))
    .toEqual({
        type: "MY/FIRST/ACTION",
        args: ["arg1", "arg2"],
        cb: identity,
        _index: 1,
    })


    expect(actionsCreator.MY.SECCOND.ACTION())
    .toEqual({
        type: "MY/SECCOND/ACTION",
        args: [],
        cb: identity,
        _index: 2,
    })

    const callback = () => console.log("I am a callback")

    expect(actionsCreator.MY.FIRST.CALLBACKABLE.ACTION(1, 2, 3, callback))
    .toEqual({
        type: "MY/FIRST/CALLBACKABLE/ACTION",
        args: [1, 2, 3],
        cb: callback,
        _index: 3,
    })

    expect(actionsCreator.MY.SECCOND.CALLBACKABLE.ACTION(callback))
    .toEqual({
        type: "MY/SECCOND/CALLBACKABLE/ACTION",
        args: [],
        cb: callback,
        _index: 4,
    })
})
/* end testing */
