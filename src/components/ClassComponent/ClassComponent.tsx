import React from 'react'


class ClassComponent extends React.Component<{ name: string }>{

    state = {
        name: 'Mundo!!!!!!'
    }

    render() {

        return <div>
            <p>name: {this.state.name}</p>

            <button onClick={()=>{
                
                this.setState({name:'MUDOU'})
                

            }}>Clica aki</button>

        </div>

    }

}

export default ClassComponent