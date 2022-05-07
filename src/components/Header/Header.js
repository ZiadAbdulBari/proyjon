import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/প্রয়োজন-logos_transparent.png'
import propic from '../../assets/images/propic.png'
// import logo from '/src/assets/images/প্রয়োজন-logos_transparent.png'
function Header() {
    let isLoggedin = JSON.parse(localStorage.getItem('isLoggedin'));
    const signout = ()=>{
        localStorage.setItem('isLoggedin',false);
        isLoggedin = localStorage.getItem('isLoggedin');
        window.location.reload(true);
    }
    return (
        <div className="bg-[#151C47]">
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="প্রয়োজন-logo" />
                    </Link>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white md:hover:text-[#DDCDC6] md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white md:hover:text-[#DDCDC6] md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white md:hover:text-[#DDCDC6] md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white md:hover:text-[#DDCDC6] md:p-0">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white md:hover:text-[#DDCDC6] md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center md:order-2">
                        {/* <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={propic} alt="user photo"/>
                        </button>

                        <div className="my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position: 'absolute' ,inset: 'auto auto 0px 0px', margin:' 0px', transform: 'translate(1246px, 793px)'}}>
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button> */}
                        {
                            isLoggedin===false?<Link className='bg-white rounded py-1 px-2' to="/signup">Signup</Link>:''
                        }
                        
                        {
                            isLoggedin?<button className='bg-white rounded py-1 px-2' onClick={signout}>Signout</button>:<Link className='bg-white rounded py-1 px-2' to="/login">Signin</Link>
                        }
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header