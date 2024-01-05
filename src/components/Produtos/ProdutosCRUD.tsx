// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Table, { TableHeader } from '../../compartilhado/Table';
import { Product } from '../../compartilhado/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Produtos/ProdutoForm';
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import { criaNovoProduto, getProducts, updateProduct ,deletaProduto} from '../../redux/Produtos/Produtos.actions';
import { RootState, ThunkDispatch } from '../../redux';
import {useLocation, useParams,useNavigate } from 'react-router-dom';



declare interface ProductCRUDProps {
    products: Product[]

}

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true }
]


const CrudProdutos: React.FC<ProductCRUDProps> = (props) => {

    const dispatch:ThunkDispatch = useDispatch();

    const params = useParams<{id?:string}>()

    const location = useLocation()

    const navigate = useNavigate()

    const alertDeErro = (error:Error) => {

       return Swal.fire('Oops!', error.message, 'error')
    }

    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

    useEffect(() => {
        setUpdatingProduct(
          params.id
            ? props.products.find(product => product._id === params.id)
            : undefined
        )
      }, [params, props.products])
    useEffect(() => {
        fectData()
        // eslint-disable-next-line
    }, [])

    async function fectData() {
       
           dispatch(getProducts()).catch(alertDeErro)
      }

    const handleProductSubmit = async (product: ProductCreator) => {

          dispatch(criaNovoProduto(product)).catch(alertDeErro)
    
      }

    const handleProductUpdate = async (newProduct: Product) => {

            dispatch(updateProduct(newProduct))
            .then(() =>  setUpdatingProduct(undefined))
            .catch(alertDeErro)
            dispatch(getProducts())
    }

    const handleProductDelete = (product: Product) => {
        Swal
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#09f',
                cancelButtonColor: '#d33',
                confirmButtonText: `Yes, delete ${product.name}!`
            })
            .then((result) => {
                if (result.value) {
                    deleteProduct(product._id)
                }
            })
    }

    const deleteProduct = async (id: string) => {

            await dispatch(deletaProduto(id))
            .then(()=> Swal.fire('Uhul!', 'Produto deletado com sucesso', 'success'))
            .catch(alertDeErro)
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }

    return <>
        <Table
            headers={headers}
            data={props.products}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={product => {
                navigate({
                  pathname: `/products/${product._id}`,
                  search: location.search
                })
              }}
            itensPerPage={5}

        />

        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
    </>

}

const mapStateToProps = (state: RootState) => ({

    products: state.products

})

export default connect(mapStateToProps)(CrudProdutos)