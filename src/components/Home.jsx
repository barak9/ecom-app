import React from 'react';
import { Header } from './Header';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cF from 'currency-formatter';

import Slider from './Slider';
import Footer from './Footer';
const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    // console.log(products);
    return (
        <div>
              <Slider />
        
            
            <div className='container ml-100'>
      
                <div className='row'>
              
                    {
                        products.map((product) => (
                            <div className='col-3' key={product.id}>
                                <div className='product'>

                                    <div className='product_img'>
                                        <Link to={`/details/${product.id}`}>
                                            <img src={`/images/${product.image}`} alt='image name' />
                                        </Link>
                                    </div>
                               
                                    <div className='product_name'>
                                        {product.name}
                                    </div>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <div className='product_price'>
                                                <span className='actualPrice'> {cF.format(product.price, { code: 'INR' })} </span>
                                                <span className='discount'> {product.discount}%</span>
                                            </div>
                                        </div>

                                        <div className='col-5'>
                                            <div className='product_discount_price'>
                                                {cF.format(product.discountPrice, { code: 'INR' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-1'></div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export { Home };
