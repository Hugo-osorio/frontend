import React, {useState, useEffect} from 'react';
import Tasks from './Tasks';

const API = process.env.REACT_APP_API;

function Users() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([{}]);
    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch(`${API}/tasks`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        const data = await res.json();
    }
    const getUsers = async () => {
        const res = await fetch(`${API}/tasks`)
        const fetchedData = await res.json();
        setData(fetchedData)
    }
    
    useEffect(() => {
        console.log('useEffect')
        getUsers();
      }, []);

    const editarRegistro = () => {

    }
    const eliminarRegistro = () => {
        
    }
    return (
        <div className="row">
            <div className="row mt-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group mb-4">
                        <input 
                        type="text" 
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        className="form-control"
                        placeholder="Name"
                        autoFocus
                        />
                    </div>
                    <div className="form-group mb-4">

                        <input 
                        type="email" 
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                        placeholder="Email"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <input 
                        type="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        className="form-control"
                        placeholder="Password"
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            <div className="col md-8">
                <Tasks tasks={data} eliminarRegistro={eliminarRegistro} editarRegistro={editarRegistro}/>
            </div>
        </div>
    )
}

export default Users
