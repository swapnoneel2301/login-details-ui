import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({userName,handleLogout}){
   return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/details">Brand</Link>
                    <div className='d-flex'>
                        <div className='text-white fw-bolder fs-4 me-4'>{userName}</div>
                        <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
       </nav>
   )
}