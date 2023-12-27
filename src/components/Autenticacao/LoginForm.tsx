import Button from "../../compartilhado/Button"
import Form from "../../compartilhado/Form"
import Input from "../../compartilhado/Input"

const LoginForm = () => {

    return <Form title="Login - AlgaStock">
        <Input label="username"
            placeholder="seu_usuario">
        </Input>

        <Input label="senha"
            placeholder="sua_senha"
            type="password">
        </Input>

        <Button>
            LOGIN
        </Button>
    </Form>
}

export default LoginForm
