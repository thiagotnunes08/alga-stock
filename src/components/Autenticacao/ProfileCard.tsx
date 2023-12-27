import Form from "../../compartilhado/Form"
import Input from "../../compartilhado/Input"


export interface User {
    name:string
    email:string
}

declare interface UserProps {
    user:User
}


const ProfileCard:React.FC<UserProps> = (props) => {

    return <div style={{minWidth:320}}>

        <Form title="Profile">
            <Input 
            label="Name"
            value={props.user.name}
            disabled
            />
            <Input 
            label="Email"
            value={props.user.email}
            disabled
            />
        </Form>
    </div>

}

export default ProfileCard