import React, { useState } from 'react'
import Form from '../../compartilhado/Form'
import Input from '../../compartilhado/Input'
import Button from '../../compartilhado/Button'


const initialFormState = {

    nome: '',
    preco: '',
    stock: ''

}

const ProdutoForm = () => {

    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const {value,name} = event.target

        setForm({
            ...form,
            [name]:value
        })

    }

    return <Form title="formulário de produtos" onSubmit={()=>console.log(form)}>

        <Input
            onChange={handleInputChange}
            name='nome'
            label='Nome'
            placeholder='ex: Pão'
            required
        />
        <Input
            onChange={handleInputChange}
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