import React from 'react'
import Register from './Register'

function Tasks(props) {
    console.log('imprimiendo',props.tasks) 
    return (
        <div className="card card-body ">
            {props.tasks.map((el)=>(
                <Register 
                    name={el.name} 
                    email={el.email} 
                    eliminarRegistro={props.eliminarRegistro} 
                    editarRegistro={props.editarRegistro}
                />
            ))}
        </div>
    )
}

export default Tasks
