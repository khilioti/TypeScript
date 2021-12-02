const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfString: Array<string> = ['one', 'one', 'two', 'three', 'five']

function revers<T>(arr: T[]): T[] {
    return arr.reverse()
}

revers(arrayOfNumbers)
revers(arrayOfString)