interface ActionPath {
   EXAMPLE_TYPE: ActionPath
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
   (...args: any[]): {
      type: string
      args: any[]
      cb: (...args: any[]) => any
      _index: number
   }
}

declare const actionsCreator: ActionPath

export = actionsCreator
