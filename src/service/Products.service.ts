import { Product } from '../compartilhado/Table/Table.mockdata'
import { ProductCreator } from '../components/Produtos/ProdutoForm'
import http from '../utils/http'

export const getAll = () =>
http
.get<Product[]>('http://localhost:3024/products')
.then(response=> response.data)


export const create = (newProdutoForm: ProductCreator) =>
http
.post('http://localhost:3024/products',newProdutoForm)

export const update = ({_id,name,price,stock}: Product) =>
http
.patch(`http://localhost:3024/products/${_id}`,{

    ...(name && {name}),
    ...(price && {price}),
    ...(stock && {stock}),
})

export const deleteSingleProduct = (id: string) =>
http
.delete(`http://localhost:3024/products/${id}`)