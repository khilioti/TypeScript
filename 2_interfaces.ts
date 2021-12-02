interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '213',
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
}
const rect2: Rect = {
    id: '213',
    size: {
        width: 10,
        height: 20
    }
}

rect2.color = '#fff'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =======
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface IClock {
    time: Date

    setTime(data: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(data: Date): void {
        this.time = data
    }

}

// ======
interface Styles {
    // border: string
    [key: string]: string
}

const css: Styles = {
    border: '1px solid #fff',
    marginTop: '10px',
    borderRadius: '20px'
}
