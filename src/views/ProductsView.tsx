import Container from "../compartilhado/Container"
import Header from "../components/Header"
import ProdutosCRUD from "../components/Produtos/ProdutosCRUD"


const ProductsView = () => {

    return <>
        <Header title="AlgaStock" />
        <Container>
            <ProdutosCRUD />
        </Container>
    </>

}

export default ProductsView