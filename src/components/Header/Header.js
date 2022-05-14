import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { ProductContext } from '../Context/ProductContext';
import logo from '../../assets/images/প্রয়োজন-logos_transparent.png';
function Header() {
    const products = useContext(ProductContext);
    console.log(products);
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
                        <div className='flex item-center gap-5'>
                            <Link to={{pathname: "/cart", state: {data:"This is test data pass"}}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                                    <path stroke='white' fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path stroke='white' d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>
                            </Link>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path stroke='white' d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                            </div>
                            <div>
                                {
                                isLoggedin===false?<Link className='bg-white rounded py-1 px-2' to="/signup">Signup</Link>:''
                                }
                                
                                {
                                    isLoggedin?<button className='bg-white rounded py-1 px-2' onClick={signout}>Signout</button>:<Link className='bg-white rounded py-1 px-2' to="/login">Signin</Link>
                                }
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header