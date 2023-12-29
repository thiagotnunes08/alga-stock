import React from 'react'
import './Header.css'
import { RootState } from '../../redux'
import { connect } from 'react-redux'
import User from '../../service/Autenticacao.service'
import Swal from 'sweetalert2'
import { logOut } from '../../redux/Autenticacao/Autenticacao.actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

declare interface HeaderProps {
    title: string
    profile?:User
}

const Header: React.FC<HeaderProps> = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = !!props.profile?._id

    const askToLogout = () => {
        Swal
          .fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33'
          })
          .then(({ value }) => value && dispatch(logOut()))
      }

    const handleLoginLogout = () => {

        isLoggedIn ? askToLogout() : navigate('/login')

    }
    return <header className="AppHeader">
        <h1>{props.title}</h1>
        <div>
            <span onClick={handleLoginLogout}>
                {
                    isLoggedIn ? 'logout' :'login'
                }
            </span>
        </div>
    </header>

}

const mapStateToProps = (state:RootState) => ({
    profile: state.authentication.profile
})

export default connect(mapStateToProps) (Header)