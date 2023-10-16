import React, {useEffect, useState} from "react";
import './TestComponent.css'

function TestComponent(props:{name:string}) {

    const [age,setAge] = useState(21)

    useEffect(()=>{
        console.log('componente criado!')
    },[])


    useEffect(()=>{
        console.log('idade atualizada para:'+age)
    },[age])

    console.log('segundo log')

    return <div className="TestComponent">Test Component - olá {props.name},{age} !!!
    <button onClick={()=> {

        setAge(age +1)

    }}>

    +
    </button>
    
    </div>
}
export default TestComponent