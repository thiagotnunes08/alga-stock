
import Button from "../../compartilhado/Button"
import Form from "../../compartilhado/Form"
import Input from "../../compartilhado/Input"
import React, { useState } from 'react'

const LoginForm = () => {
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

    const handleLogin = () => {
        console.table(form)
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
