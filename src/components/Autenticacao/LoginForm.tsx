// @ts-nocheck
import Swal from "sweetalert2"
import Button from "../../compartilhado/Button"
import Form from "../../compartilhado/Form"
import Input from "../../compartilhado/Input"
import React, { useState } from 'react'
import { login } from "../../redux/Autenticacao/Autenticacao.actions"
import { useDispatch } from "react-redux"

const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = async () => {
        try {
            await dispatch(login(form))
            
        } catch (error) {
            Swal.fire(
            'Error',
             error.response?.data?.message || error.message,
            'error'
            )
        }
    }

    return <Form title="Login - AlgaStock" onSubmit={handleLogin}>

        <Input
            label="user"
            name="user"
            value={form.user}
            onChange={handleInputChange}
        />

        <Input
            label="senha"
            name="pass"
            type="password"
            value={form.pass}
            onChange={handleInputChange}

        />
        <Button>
            LOGIN
        </Button>
    </Form>
}

export default LoginForm
