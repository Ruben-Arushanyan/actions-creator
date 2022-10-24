---
sidebar_position: 1
title: 'Actions Creator'
---

# Actions Creator

## Description

**actions-creator** is an awesome javascript package that allows you to **dynamically** create action objects in Redux **without** having to declare *CONSTANTS* and separate *action-creator* functions for each action.

## Installation

```bash
npm install actions-creator
```

## Usage Example


```javascript
import {actionsCreator} from 'actions-creator'

const action_1 = actionsCreator.MY.FIRST.ACTION('arg1')
//      {
//          type: 'MY/FIRST/ACTION',
//          payload: 'arg1',
//      } 

const action_2 = actionsCreator.This.is.my.second.action(2021)
//      {
//          type: 'This/is/my/second/action',
//          payload: 2021,
//      } 


// To get the type of action
String( actionsCreator.MY.FIRST.ACTION ) // 'MY/FIRST/ACTION'
// or
actionsCreator.MY.FIRST.ACTION().type // 'MY/FIRST/ACTION'

```

## Actions With Callback

Sometimes we need the action to have **callback capability**. It might be necessary in many cases.

**`Actions Creator`** allows us to do this in a beautiful way: 
When we try to generate an action object, we can pass the **callback function** as the last argument. `Actions Creator` will check and if the last argument is a function, it will be considered as a **callback function**.

```javascript
import {actionsCreator} from 'actions-creator'

const callback = () => {
    console.log('Hello, I am callback!!!')
}

const action = actionsCreator.MY.CALLBACKABLE.ACTION(123, callback)
//      {
//          type: 'MY/CALLBACKABLE/ACTION',
//          payload: 123,
//          cb: [Function callback],
//      }

action.cb() // 'Hello, I am callback!!!'
```

## Syntax

### `actionsCreator.ANY.ACTION(payload, callback?)`

- **payload** `<Any>`  
    Any value as a payload.
- **callback** `<Function>`  
    Any function as a callback.

**Returns** `<Object>` 

- **type** `<String>` Action type as a string.  
    ```js
        actionsCreator.ANY.ACTION().type === 'ANY/ACTION' // true
    ```
- **payload** `<Any>`  
    The value of the payload - given in the first argument.
    ```js
            actionsCreator.ANY.ACTION(123).payload === 123 // true
    ```
- **cb** `<Function>`  
    The function of the callback - given in the last argument.
    ```js
            const callback = () => {};

            actionsCreator.ANY.ACTION(123, callback).cb === callback // true
    ```
