// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Table, { TableHeader } from '../../compartilhado/Table';
import { Product } from '../../compartilhado/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Produtos/ProdutoForm';
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import { criaNovoProduto, getProducts, updateProduct ,deletaProduto} from '../../redux/Produtos/Produtos.actions';
import { RootState } from '../../redux';


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

    const dispatch = useDispatch();


    // const [products, setProducts] = useState<Product[]>([])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

    async function fectData() {
        try {
          await dispatch(getProducts())
        } catch (err) {
          if (err instanceof Error) {
            Swal.fire('Oops!', err.message, 'error')
          }
        }
      }

    useEffect(() => {
        fectData()
    }, [])

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
          dispatch(criaNovoProduto(product))

        } catch (err) {
          if (err instanceof Error) {
            Swal.fire('Oops!', err.message, 'error')
          }
        }
      }

    const handleProductUpdate = async (newProduct: Product) => {
        try {
            await dispatch(updateProduct(newProduct))
            setUpdatingProduct(undefined)
            dispatch(getProducts())
        }
        catch (err) {
            if (err instanceof Error)
                Swal.fire('Oops!', err.message, 'error')
        }
    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product)
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

        try {
            await dispatch(deletaProduto(id))
            Swal.fire('Uhul!', 'Produto deletado com sucesso', 'success')
        }
        catch (err) {
            if (err instanceof Error)
                Swal.fire('Oops!', err.message, 'error')
        }
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
            onEdit={handleProductEdit}

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