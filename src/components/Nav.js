import React from 'react';
import {Link} from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import {useSelector} from 'react-redux';

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer);
    return (
      
        <div className='nav'>
           
           
                <div className='nav-container'>
                    <div className='left'>
                    <Link to='/'>
                     <img src={process.env.PUBLIC_URL+"/images/logo.jpg"} />
                     </Link>
                    </div>
                    <ul className='nav-items'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>AboutUs</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                        <li>
                            <a href='#'>Courses</a>
                        </li>
                    </ul>

                    <div className='right'>
                        <Link to='/cart'>
                        <div className='basket'>
                            <BsFillBagFill className='cart-icon' />
                            <span> {totalQuantities} </span>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
         
    )
}

export {Nav};
