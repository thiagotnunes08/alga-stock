import { Product } from "../../compartilhado/Table/Table.mockdata";
import { ProductCreator } from "../../components/Produtos/ProdutoForm";
import { create, deleteSingleProduct, getAll, update } from "../../service/Products.service";
import { Thunk } from "..";


export const updateProduct = (newProduct: Product): Thunk =>
async (dispatch) => {
await update(newProduct)
dispatch(getProducts())
}

export const getProducts =

 (): Thunk<Product[]> => 
 async (dispatch)=> {
    const products = await getAll()
    
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload:products
    })
}

export const criaNovoProduto = (produto:ProductCreator):Thunk => async (dispatch) => {

    await create(produto)
    dispatch(getProducts())
}

export const deletaProduto = (id:string):Thunk => async (dispatch) => {

    await deleteSingleProduct(id)
    dispatch(getProducts())

}


