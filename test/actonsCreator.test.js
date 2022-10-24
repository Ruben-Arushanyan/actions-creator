import actionsCreator from '../.packed'

test('Actions Creator Basic Test', () => {
    expect(actionsCreator.MY.FIRST.ACTION("arg1"))
    .toEqual({
        type: "MY/FIRST/ACTION",
        payload: "arg1",
    })


    expect(actionsCreator.MY.SECCOND.ACTION())
    .toEqual({
        type: "MY/SECCOND/ACTION",
        payload: undefined,
    })

    const callback = () => console.log("I am a callback")

    expect(actionsCreator.MY.FIRST.CALLBACKABLE.ACTION(1, callback))
    .toEqual({
        type: "MY/FIRST/CALLBACKABLE/ACTION",
        payload: 1,
        cb: callback,
    })

    expect(actionsCreator.MY.SECCOND.CALLBACKABLE.ACTION(callback))
    .toEqual({
        type: "MY/SECCOND/CALLBACKABLE/ACTION",
        payload: undefined,
        cb: callback,
    })

    expect(String(actionsCreator.a.b.c))
    .toBe('a/b/c')
})
