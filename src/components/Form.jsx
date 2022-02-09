import React, { useState } from 'react';

const Form = () => {
    const [info, setInfo] = useState({
        name: '',
        address: '',
        city: '',
        pincode: '' ,
        email: '',
        number: '',
        color: ''
    });

    const inputEvent = (event) => {
        setInfo(event.target.name);
    }

    
    const onSubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
    }

    return (
        <>
            <div className='main-div'>
                <form onSubmit={onSubmit}>
                    <div className='main-div'>
                        <h1> Hello {fullName} </h1>

                        <input type='text'
                         placeholder='Enter Your Name' value={info.name}
                         onChange={inputEvent}
                         name='fName' />

                        <input type='text'
                         placeholder='Enter Your Full Address' value={info.address}
                         onChange={inputEvent}
                         name='address' />  

                         <input type='text'
                         placeholder='Enter Your City' value={info.city}
                         onChange={inputEvent}
                         name='city' />   

                         <input type='text'
                         placeholder='Pin' value={info.pincode}
                         onChange={inputEvent}
                         name='pincode' />

                         <input type='text'
                         placeholder='Enter Your Email' value={info.email}
                         onChange={inputEvent}
                         name='email' />     

                        <input type='text'
                         placeholder='Enter Your Number' value={info.number}
                         onChange={inputEvent}
                         name='number' /> 

                        <button type='submit' onClick={onSubmit}> Submit </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export { Form };