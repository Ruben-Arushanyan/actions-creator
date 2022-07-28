# Actions Creator

## Description
**`Actions Creator`** is an awesome tiny javascript package that allows you to dynamically and easily create [callbackable-actions](https://github.com/ruben-arushanyan/actions-creator/wiki/callbackable-actions) standardized objects. \
It was originally used to create [redux](https://github.com/reduxjs/redux) actions, but it can be used anywhere when it is needed.


## Installation

```bash
npm install actions-creator
```

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

As we see in the example above, every action object has following fields:
- **`type`** \<String> action type as a string
- **`args`** \<Array> any array that contains all the data needed for the action
- **`cb`** \<Function> callback function by default is *identity function (x => x)*, but we can pass any function if we need to have a callback. The next example below shows how to pass that.
- **`_index`** \<Integer> positive integer number (1, 2, 3, ...)․ It is created automatically and shows action order by index. It can be used as a unique identifier or help understand which action was created earlier(in rare cases, it may be necessary)



## Actions With Callback

Sometimes we need the action to have **callback capability**. It might be necessary in many cases. \
**`Actions Creator`** allows us to do this in a beautiful way: \
When we try to generate an action object, we can pass the **callback function** as the last argument. `Actions Creator` will check and if the last argument is a function, it will be considered as a **callback function**.

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

callbackable_action.cb()
//      "Hello, I am callback!!!"

```

## Customize
We do not recommend to customize,
but if you need to do it, you can easily do that: \
see: [Produce By Path Pattern](https://github.com/ruben-arushanyan/produce-by-path)
<hr/>

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/ruben-arushanyan/actions-creator/blob/master/LICENSE)
