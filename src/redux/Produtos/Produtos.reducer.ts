import { Action } from ".."
import { ProductCreator } from "../../components/Produtos/ProdutoForm"

// eslint-disable-next-line
export default function (state:ProductCreator[] = [], action: Action): ProductCreator[] {

    switch (action.type) {

        case 'FETCH_PRODUCTS':
            return [...action.payload]

        default:
            return state
    }
}