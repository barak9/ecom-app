import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsReducer } from '../store/reducers/ProductsReducer';
import cF from 'currency-formatter';
import { BsDash, BsPlus } from "react-icons/bs";
import {Cart} from './Cart';
import Footer from './Footer';


const Details = () => {

    const [quantity, setQuantity] = useState(1);
    const decQuantity = () =>{
        if(quantity > 0){
            setQuantity(quantity -1);
        }
    }

    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductsReducer);
    // console.log(product);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id: id });
    }, [id]);
    return (
        <div className='container-fluid mt-100'>
            <div className='row'>
            <div className='col-1'></div>
                <div className='col-4'>
                    <div className='details_img'>
                        <img src={`/images/${product.image}`} alt='pic' />
                    </div>
                </div>
              
                <div className='col-4'>
                    <div className='details_name'>
                        {product.name}
                    </div>
                    <div className="details_price">
                    M.R.P <span className='details_actual'> {cF.format(product.price, { code: 'INR' })} </span>
                        <span className='details_discount'> {product.discountPrice}</span><br></br>
                        Price:<span className='details_discount'> {product.discountPrice}</span>
                    </div>
                    <div className='details_info'>
                        {  <div className='details_incDec'>
                            <span className="dec" onClick={decQuantity}><BsDash /></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='inc' onClick={()=>setQuantity(quantity +1)}><BsPlus /></span>
                            <button className='btn-default'
                            onClick={()=>{dispatch({type: 'ADD_TO_CART',
                            payload: {product: product, quantity: quantity}})}}>Add To Cart</button>
                        </div>  }
                        
                            
                        
                    </div>
                    <br>
                    </br>
                    <div className="details_p">
                    <h2>PRODUCT DETAILS</h2>
                    <table class="table table-bordered">
                       <tr>
                         <th>Colour</th>  <th>ScreenSize</th> <th>ItemWeight</th><th>Brand</th> <th>Processor</th><th>RAMSize</th><th>HardDisk</th></tr>
                         <tr><td>  {product.Colour}</td><td> {product.ScreenSize}</td><td>{product.ItemWeight}   </td><td>{product.Brand}</td> <td>{product.Processor}</td> <td>{product.RAMSize}</td>  <td>{product.HardDiskSize}</td> </tr> 
                      
                    
                     
                      
                      
                     
                      
                       </table>
                    </div>
                </div>
                <div className='col-3 '> </div>
                <br></br> <br></br> <br></br>
                <div className='col mt-100'> 
                
                <Footer/>
                
                
                
                
                </div>
            </div>
           
        </div>
        
        
    )
}

export { Details };
