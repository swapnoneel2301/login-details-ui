import React ,{useState} from 'react';
import { Navigate,Link,useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
export default function Login(){
    // const [userName,setUserName] = useState('');
    // const [password,setPassword] = useState('');
    const {userName,changeUserName,password,changePassword} = useGlobalContext();
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log(userName,password);
        localStorage.setItem('userName',userName);
        console.log(localStorage.getItem('userName'));
        navigate('/details');
    }

    return (
       <section className='wrapper login'>
           <div className='container'>
               <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
                   <form className='rounded bg-dark shadow p-5' onSubmit={handleSubmit}>
                      <h3 className='text-white fw-bolder fs-4 mb-4'>Enter Details to Login</h3>
                      <div className='form-floating mb-3'>
                          <input type='text' 
                                 value={userName} 
                                 onChange={(e)=>changeUserName(e.target.value)}
                                 className='form-control bg-dark color-white' id='floatingInput' placeholder='username' required></input>
                          <label htmlFor='floatingInput' className='color-white'>
                              Your Username
                              <span className='color-red'> * </span>
                          </label>
                      </div>
                      <div className='form-floating mb-3'>
                          <input type='password' 
                                 value={password} 
                                 onChange={(e)=>changePassword(e.target.value)}
                                 className='form-control bg-dark color-white' id='floatingPassword' placeholder='password' required></input>
                          <label htmlFor='floatingPassword' className='color-white'>
                              Your Password
                              <span className='color-red'> * </span>
                          </label>
                      </div>
                      <button className='btn btn-primary fw-bold color-white'>
                          Login Now
                      </button>
                   </form>
               </div>
           </div>
       </section>
    )
}