// @ts-nocheck
import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Container from '../compartilhado/Container'
import withPermission from '../utils/HOC/withPermission'
import User from '../service/Autenticacao.service'
import ProfileCard from '../components/Autenticacao/ProfileCard'

declare interface ProfileViewProps {
  user: User
}
const ProfileView: React.FC<ProfileViewProps> = (props) => {
  return <>
    <Header title="AlgaStock" />
    <Container>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ProfileCard user={props.user} />
      </div>
    </Container>
  </>
}
const mapStateToProps = () => ({
  user: {
    name: 'thiago tomaz nunes',
    email: 'thiago@gmail.comss'
  }
})
const ConnectedProfileView = connect(mapStateToProps)(ProfileView);

export default withPermission(['admin', 'customer'], '/')(
  ConnectedProfileView
);