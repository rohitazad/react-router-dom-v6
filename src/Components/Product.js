import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductComponents = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    console.log('params', params);
    const handleClickBack = ()=>{
        console.log('clck button', );
        navigate('/')
    }
    return (
        <>
            Hello i m ProductComponents  
            <h2>Product Id :- {params.productId}</h2>
            <h2>Product Cate :- {params.productCate}</h2>
            <button onClick={handleClickBack}>back to home</button>
        </>
    )
}
export default ProductComponents;
