interface Person {
    name: string
    age: number
}

type KeyPerson = keyof Person // 'name' | 'age'

let key: KeyPerson = 'name'
key = 'age'
// key = 'weight'

type User = {
    _id: number
    name: string
    email: string
    createAT: boolean
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAT'>  // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>  // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'