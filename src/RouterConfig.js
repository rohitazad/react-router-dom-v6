import React from 'react';

import {BrowserRouter , Routes, Route} from 'react-router-dom';

import HomeComponents from './Components/Home';
import AboutComponents from './Components/About';
import ContactComponents from './Components/Contact';
import ProductComponents from './Components/Product';
import HeaderComponents from './Components/Header';

const RouterConfigComponents = ()=>{
    return (
        <>
        
            <BrowserRouter>
                <HeaderComponents />
                <Routes>
                    <Route path="/" element={<HomeComponents />} />
                    <Route path="/about" element={<AboutComponents />} />
                    <Route path="/contact" element={<ContactComponents />} />
                    <Route path="/product/:productId/:productCate" element={<ProductComponents />} />
                </Routes>
            </BrowserRouter> 
        </>
    )
}

export default RouterConfigComponents;
