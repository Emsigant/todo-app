declare interface ItodoItem {
    checked: boolean
    text: string
    id: number
    showEdit?: boolean
}

declare interface IhandleChange {
    (checked: boolean, id: number): void
}