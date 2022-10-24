---
sidebar_position: 1
title: 'Introduction'
---

# Actions Creator - Redux

## Description

**actions-creator** is an awesome javascript package that allows you to **dynamically** create action objects in Redux **without** having to declare *CONSTANTS* and separate *action-creator* functions for each action.


## Installation

```bash
npm install actions-creator
```

## Usage

```javascript
import actionsCreator from "actions-creator"

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
