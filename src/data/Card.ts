

export class Card {

    constructor(public readonly id: number,
                public readonly title: string,
                public readonly lists: Item[]) {
    }
}

export class Item {

    constructor(public readonly id: number,
                public readonly description: string,
                public completed: boolean) {
    }
}