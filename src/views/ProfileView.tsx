import { connect } from "react-redux"
import Header from "../components/Header"
import Container from "../compartilhado/Container"
import ProfileCard, { User } from "../components/Autenticacao/ProfileCard"


declare interface ProfileViewProps {
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {

    return <>

        <Header title="Profile - AlgaStock" />
        <Container>
            <div style={{

                display: "flex",
                justifyContent: "center"
            }}>
                <ProfileCard user={props.user} />
            </div>

        </Container>

    </>

}

const mapStateToProps = () => ({
    user: {
        name: 'thiago tomaz nunes',
        email: 'thiago@gmail.com'
    }
})

export default connect(mapStateToProps)(ProfileView)