class TypeScript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info (name: string) {
        return `[${name}] TypeScrip version is ${this.version}`
    }
}

// class Car {
//    readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
// this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}
// =======
class Animal {
    protected voise:string = ''
    public color: string = 'black'

    private go(): void {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVois(voise: string): void {
        this.voise = voise
    }
}

const cat = new Cat()
// cat.voise
cat.setVois('Miuuu')
console.log(cat.color)

// =======
abstract class Components {
   abstract render(): void
    abstract info(): string
}

class AppComponent extends Components {
    render(): void {
        console.log('Render component')
    }
    info(): string {
        return 'Info component'
    }
}
