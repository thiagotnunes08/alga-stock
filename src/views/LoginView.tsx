import LoginForm from "../components/Autenticacao/LoginForm"



const LoginView = () => {

    return <div style={{

        minHeight: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'

    }}>
        <div style={{ minWidth: 420 }}>
            <LoginForm />
        </div>
    </div>
}


export default LoginView