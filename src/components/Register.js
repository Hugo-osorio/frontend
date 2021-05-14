import React from 'react'

function Register({name, email, eliminarRegistro, editarRegistro}) {
    eliminarRegistro()
    return (
        <div className="mb-4 d-flex justify-content-between">
            <div>    
                <span className="fw-bold">Nombre:</span> {name} <span className="fw-bold">Email:</span> {email} ya está registrado
            </div>
            <div>
                <button type="button" className="btn btn-success" onClick={eliminarRegistro(name)}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={editarRegistro(name)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Register
