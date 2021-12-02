const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 17
const float: number = 4.5
const num: number = 3e10

const massage: string = 'Hello Typescript'

const numArray: number[] = [1, 1, 2, 3, 5, 8, 13, 21]
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13, 21]
const stringArray: string[] = ['Hello', 'Typescript']

// Tuple
const contact:[string, number] = ['Nikita', 23644165]

// Any
let variable: any = 17

variable = 'Hello'
variable = []

// =======
function myFun (name): void {
    console.log(name)
}
myFun('MZG')

// Never
function throwError (message: string): never {
    throw new Error(message)
}

function infinity(): never {
    while (true) {

    }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 123

type ID = string | number

const id1: ID = '12321'
const id2: ID = 11233
// const id3: ID = []

type SomeType = string | null | undefined