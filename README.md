# Actions Creator

## Description
**`Actions Creator`** is an awesome tiny javascript package that allows you to dynamically and easily create [callbackable-actions](https://github.com/ruben-arushanyan/actions-creator/wiki/callbackable-actions) standardized objects. \
It was originally used to create [redux](https://github.com/reduxjs/redux) actions, but it can be used anywhere when it is needed.


<hr>

## Installation

```bash
npm install actions-creator
```
<hr/>

## Usage
```javascript
import actionsCreator from "actions-creator"
//      CommonJS usage
//      const actionsCreator = require("actions-creator")

const first_action = actionsCreator.MY.FIRST.ACTION("arg1", "arg2")
console.log(first_action)
//      {
//          type: "MY/FIRST/ACTION",
//          args: ["arg1", "arg2"],
//          cb: f() identity,
//          _index: 1
//      } 

const second_action = actionsCreator.This.is.my.second.action(2021)
console.log(second_action)
//      {
//          type: "This/is/my/second/action",
//          args: [2021],
//          cb: f() identity,
//          _index: 2
//      } 



//      If we just need to generate an action type as a string,
//      we can do it easily
const type1 = String(actionsCreator.MY.FIRST.ACTION)
console.log(type1)
//      "MY/FIRST/ACTION"

//      or when doing any string conversion
const type2 = actionsCreator.MY.FIRST.ACTION + ""
console.log(type2)
//      "MY/FIRST/ACTION"

```

As we see in the example above, every action object have following fields:
- **`type`** \<String> action type as a string
- **`args`** \<Array> any array that contains all the data needed for the action
- **`cb`** \<Function> callback function by default is *identity function (x => x)*, but we can pass any function if we need to have a callback,  The next example below shows how to pass that.
- **`_index`** \<Integer> positive integer number (1, 2, 3, ...)․ It creates automatically and shows action order by index. can be used as a unique identifier or help understand which action created earlier(in rare cases, it may be necessary)


<hr/>

## Actions With Callback

Sometimes we need, which action has a **callback capability**, In lots of cases it can be very necessary․ \
**`Actions Creator`** allows us to do this in a beautiful way: \
when we try to generate an action object, we can pass the **callback function** as the last argument, `Actions Creator` will check if the last argument is a function, it will be considered as a **callback function**.

```javascript
import actionsCreator from "actions-creator"


const my_callback = () => {
    console.log("Hello, I am callback!!!")
}

const callbackable_action = actionsCreator.CALLBACKABLE.EXAMPLE(1, 2, 3, my_callback)

console.log(callbackable_action)
//      {
//          type: "CALLBACKABLE/EXAMPLE",
//          args: [1, 2, 3],
//          cb: f() my_callback,
//          _index: 1
//      }

console.log(callbackable_action.cb())
//      "Hello, I am callback!!!"

```
<hr/>

## Customize
We do not recommend customize,
but if you need to do it, you can easily do that: \
see: [Produce By Path Pattern](https://github.com/ruben-arushanyan/produce-by-path)
<hr/>

## Maintainers

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

<hr/>

## License
[MIT](https://github.com/ruben-arushanyan/actions-creator/blob/master/LICENSE)
