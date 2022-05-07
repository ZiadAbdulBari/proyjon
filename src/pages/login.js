import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header/Header'


function Login() {
    const [user,setUser] = useState({
        username:'',
        password:''
    })

    const getUserData = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user,
            [name]:value
        })
    }
    const navigate = useNavigate();
    const signin = (e)=>{
        e.preventDefault();
        let url = 'https://fakestoreapi.com/auth/login';
        axios.post(url,user)
        .then(response=>{
            // console.log(response);
            
            let token = response.data.token;
            localStorage.setItem('token',JSON.stringify(token));
            localStorage.setItem('isLoggedin',true);
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
        <Header/>
        <div className='container mx-auto h-full'>
            <div className='w-1/4 bg-gray-50 py-5 px-5 m-auto'>
                <p>Please use this username and password for login.</p>
                <p>Username: johnd</p>
                <p>Password: m38rmF$</p>
                <form>
                    <div className='w-full mb-5'>
                        <label className='block'>Username</label>
                        <input type="text" name='username' value={user.username} onChange={getUserData} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                    </div>
                    <div className='w-full mb-5'>
                        <label className='block'>Password</label>
                        <input type="password" name='password' value={user.password} onChange={getUserData} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                    </div>
                    <button className='py-2 px-5 bg-sky-600 text-white rounded-md' onClick={signin}>Signin</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login