import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header/Header';

function Signup() {
    const [user,setUser] = useState({
        email:'',
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        city:'',
        street:'',
        house:'',
        zipcode:'',
        phone:''
    });
    const navigate = useNavigate();

    const getInputData=(e)=>{
        setUser({...user,
            [e.target.name]: e.target.value,
        })
    }
    let data={
        email:user.email,
        username:user.username,
        password:user.password,
        name:{
            firstname:user.firstname,
            lastname:user.lastname
        },
        address:{
            city:user.city,
            street:user.street,
            number:user.house,
            zipcode:user.zipcode,
            geolocation:{
                lat:'',
                long:''
            }
        },
        phone:user.phone
    }

    const createUser = (e)=>{
        e.preventDefault();
        let url = 'https://fakestoreapi.com/users';
        axios.post(url,data)
        .then(response=>{
            console.log(response);
            if(response.status==200){
                localStorage.setItem('isLoggedin',true);
                localStorage.setItem('userData',JSON.stringify(response.data));
                navigate('/');
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    return (
        <div>
            <Header/>
            <div className='container mx-auto h-full'>
                <div className='w-2/4 bg-gray-50 py-5 px-5 m-auto'>
                    <form onSubmit={createUser}>
                        <div className='flex justify-between mb-5'>
                            <div className='w-[31%]'>
                                <label className='block'>First Name</label>
                                <input onChange={getInputData} type="text" name='firstname' value={user.firstname} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                            <div className='w-[31%]'>
                                <label className='block'>Last Name</label>
                                <input onChange={getInputData} type="text" name='lastname' value={user.lastname} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                            <div className='w-[31%]'>
                                <label className='block'>Username</label>
                                <input onChange={getInputData} type="text" name='username' value={user.username} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                        </div>
                        <div className='flex justify-between mb-5'>
                            <div className='w-[31%]'>
                                <label className='block'>Phone Number</label>
                                <input onChange={getInputData} type="text" name='phone' value={user.phone} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                            <div className='w-[31%]'>
                                <label className='block'>Email</label>
                                <input onChange={getInputData} type="email" name='email' value={user.email}  className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                            <div className='w-[31%]'>
                                <label className='block'>Password</label>
                                <input onChange={getInputData} type="password" name='password' value={user.password} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                        </div>
                        <div className='flex justify-between mb-5'>
                            <div className='w-[48%]'>
                                <label className='block'>City</label>
                                <input onChange={getInputData} type="text" name='city' value={user.city} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                            <div className='w-[48%]'>
                                <label className='block'>street</label>
                                <input onChange={getInputData} type="text" name='street' value={user.street} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                        </div>
                        <div className='flex justify-between mb-5'>
                            <div className='w-[48%]'>
                                <label className='block'>House Number</label>
                                <input onChange={getInputData} type="text" name='hourse' value={user.number} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                            <div className='w-[48%]'>
                                <label className='block'>Zip Code</label>
                                <input onChange={getInputData} type="text" name='zipcode' value={user.zipcode} className='form-input border-gray-300 px-2 py-2 rounded-md w-full'/>
                            </div>
                        </div>
                        <button className='py-2 px-5 bg-sky-600 text-white rounded-md' onClick={createUser}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup