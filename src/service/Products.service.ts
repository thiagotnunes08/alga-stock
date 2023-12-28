import { Product } from '../compartilhado/Table/Table.mockdata'
import { ProductCreator } from '../components/Produtos/ProdutoForm'
import http from '../utils/http'

export const getAll = () =>
http
.get<Product[]>('/products')
.then(response=> response.data)


export const create = (newProdutoForm: ProductCreator) =>
http
.post('/products',newProdutoForm)

export const update = ({_id,name,price,stock}: Product) =>
http
.patch(`/products/${_id}`,{

    ...(name && {name}),
    ...(price && {price}),
    ...(stock && {stock}),
})

export const deleteSingleProduct = (id: string) =>
http
.delete(`/products/${id}`)