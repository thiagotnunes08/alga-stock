import React, { useState } from 'react'
import Form from '../../compartilhado/Form'
import Input from '../../compartilhado/Input'
import Button from '../../compartilhado/Button'


const initialFormState = {

    nome: '',
    preco: '',
    stock: ''

}

export interface ProdutoRequest {

    name: string
    price: number
    stock: number
}

declare interface ProdutoRequestProps {

    onSubimit: (produto: ProdutoRequest) => void

}

const ProdutoForm: React.FC<ProdutoRequestProps> = (props) => {

    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })

    }

    const formatData = () => {

        const proutoDTO = {
            name: form.nome,
            price: parseFloat(form.preco),
            stock: Number(form.stock)

        }

        props.onSubimit(proutoDTO)
        setForm(initialFormState)

    }

    return <Form title="formulário de produtos" onSubmit={formatData}>

        <Input
            onChange={handleInputChange}
            value={form.nome}
            name='nome'
            label='Nome'
            placeholder='ex: Pão'
            required
        />
        <Input
            onChange={handleInputChange}
            value={form.preco}
            name='preco'
            label='Preço'
            placeholder='ex: 0.50'
            type='number'
            min='0'
            step={'0.1'}
            required
        />
        <Input
            onChange={handleInputChange}
            value={form.stock}
            name='stock'
            label='Stock'
            type='number' min='0'
            placeholder='ex: 10'
            required
        />


        <Button>cadastrar</Button>
    </Form>

}


export default ProdutoForm