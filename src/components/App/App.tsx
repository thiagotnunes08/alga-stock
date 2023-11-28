import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Header from '../Header';
import Container from '../../compartilhado/Container';
import Table, { TableHeader } from '../../compartilhado/Table';
import { Product } from '../../compartilhado/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Produtos/ProdutoForm';
import { getAll } from '../../service/Products.service';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {


  const [products, setProducts] = useState<Product[]>([])
  const [updantingProduct, setUpdatingProduct] = useState<Product | undefined>()

  useEffect(()=> {

    async function fectData(){
      
      const _products = await getAll()
      setProducts(_products)
    }

    fectData()
  },[])

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        _id: String(products.length + 1),
        ...product
      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product =>
      product._id === newProduct._id
        ? newProduct
        : product
    ))

    setUpdatingProduct(undefined)
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
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })


  }

  const deleteProduct = (id: string) => {

    setProducts(products.filter(p=> p._id != id))

  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  }

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={handleProductDelete}
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}

        />

        <ProductForm
          form={updantingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate}
        />
      </Container>
    </div>
  );
}

export default App;