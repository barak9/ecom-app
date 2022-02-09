import React from 'react';
import cF from 'currency-formatter';
import { useSelector, useDispatch } from 'react-redux';
import { BsDash, BsPlus } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";


const Cart = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    console.log(products);
    return (
        <form >
        <div className='cart'>
            <div className='container'>
                <h3> your cart </h3>
                {products.length > 0 ? <>
                    <div className='row'>
                        <div className='col-9'>
                            <div className='cart_heading'>
                                <div className='row'>
                                    <div className='col-2'>Picture</div>
                                    <div className='col-2'>Name</div>
                                    <div className='col-2'>Price</div>
                                    <div className='col-2'>Inc/Dec</div>
                                    <div className='col-2'>Total Price</div>
                                    <div className='col-2'>Remove</div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row verticalAlign" key={product.id}>
                                    <div className='col-2'>
                                        <div className='cart_image'>
                                            <img src={`/images/${product.image}`} alt='' />
                                        </div>
                                    </div>

                                    <div className='col-2'>
                                        <div className='cart_name'>
                                            {product.name}
                                        </div>
                                    </div>

                                    <div className='col-2'>
                                        <div className='cart_price'>
                                            {cF.format(product.discountPrice, { code: 'INR' })}
                                        </div>
                                    </div>

                                    <div className='col-2'>
                                        <div className='details_info cart_incDec'>
                                            <div className='details_incDec'>
                                                <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}><BsDash /></span>
                                                <span className='quantity'>{product.quantity}</span>
                                                <span className='inc' onClick={() => dispatch({ type: 'INC', payload: product.id })} ><BsPlus /></span>
                                                {/* <button className='btn-default'>Add To Cart</button> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-2'>
                                        <div className='cart_total text-center'>
                                            {cF.format(product.discountPrice * product.quantity, { code: 'INR' })}
                                        </div>
                                    </div>

                                    <div className='col-2'>
                                        <div className='cart_remove' onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                            <BsXSquare />
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className='col-3 summary-col'>
                            <div className="summery">
                                <div className="summary_heading">
                                    Summary
                                </div>
                                <div className='summary_details'>
                                    <div className='row mb-10'>
                                        <div className='col-6'>
                                            Total Items:
                                        </div>
                                        <div className='col-6' name="" value={totalQuantities}>
                                        {totalQuantities}
                                        </div>
                                    </div>
                                    
                                    <div className='row'>
                                        <div className='col-6'>
                                            Total Price
                                        </div>
                                        <div calssName='col-6' name=" " >
                                        {totalPrice} 
                                        </div>

                                        <button type='button' className='checkout' onClick="">Checkout</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                    : 'your cart is empty!'}
            </div>
        </div></form>
    )
}

export { Cart };
