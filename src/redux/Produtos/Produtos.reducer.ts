import { Action } from ".."
import Products, { Product } from "../../compartilhado/Table/Table.mockdata"


export default function (state:Product[] = [], action: Action): Product[] {

    switch (action.type) {

        case 'FETCH_PRODUCTS':
            return [...action.payload]

        default:
            return state
    }
}