interface ActionPath {
   apply: ActionPath
   arguments: ActionPath
   bind: ActionPath
   call: ActionPath
   caller: ActionPath
   length: ActionPath
   name: ActionPath
   prototype: ActionPath
   toString: ActionPath
   [key: string]: ActionPath
   <T extends any[], C extends any>(...args: [...T, C]): {
      type: string
      args: C extends (...args: any[]) => any ? T : [...T, C]
      cb: C extends (...args: any[]) => any ? C : <M = any>(arg?: M) => M
      _index: number
   }
}

declare const actionsCreator: {
   [key: string]: ActionPath
}

exports = actionsCreator
