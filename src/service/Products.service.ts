import { Product } from '../compartilhado/Table/Table.mockdata'
import http from '../utils/http'

export const getAll = () =>
http
.get<Product[]>('http://localhost:3024/products')
.then(response=> response.data)